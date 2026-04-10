const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Initialize Database
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        
        // Create tables if they don't exist
        db.serialize(() => {
            db.run(`CREATE TABLE IF NOT EXISTS events (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                date TEXT NOT NULL,
                time TEXT NOT NULL,
                location TEXT NOT NULL,
                description TEXT,
                capacity INTEGER NOT NULL
            )`);

            db.run(`CREATE TABLE IF NOT EXISTS registrations (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                event_id INTEGER,
                student_name TEXT NOT NULL,
                student_id_number TEXT NOT NULL,
                email TEXT NOT NULL,
                FOREIGN KEY (event_id) REFERENCES events (id)
            )`);
            
            // Seed sample data if empty
             db.get('SELECT COUNT(*) AS count FROM events', (err, row) => {
                 if (row) {
                    if (row.count === 0) {
                        console.log('Seeding initial event data...');
                        const stmt = db.prepare('INSERT INTO events (title, date, time, location, description, capacity) VALUES (?, ?, ?, ?, ?, ?)');
                        stmt.run('Annual Tech Symposium', '2026-05-15', '09:00', 'Main Auditorium', "A grand gathering of technical minds showcasing projects and attending keynotes. Don't miss out!", 200);
                        stmt.run('Web Development Workshop', '2026-05-20', '14:00', 'Lab 402', 'Hands-on workshop covering advanced modern web topics like React, Node, and more.', 50);
                        stmt.finalize();
                    }
                 }
             });
        });
    }
});

// APIs

// 1. Get all upcoming events
app.get('/api/events', (req, res) => {
    db.all(`SELECT * FROM events ORDER BY date ASC`, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// 2. Register for an event
app.post('/api/register', (req, res) => {
    const { event_id, student_name, student_id_number, email } = req.body;
    
    // Basic validation
    if (!event_id || !student_name || !student_id_number || !email) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    db.run(
        `INSERT INTO registrations (event_id, student_name, student_id_number, email) VALUES (?, ?, ?, ?)`,
        [event_id, student_name, student_id_number, email],
        function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({
                message: 'Successfully registered',
                id: this.lastID
            });
        }
    );
});

// 3. Admin: Create a new event
app.post('/api/events', (req, res) => {
    const { title, date, time, location, description, capacity } = req.body;

    if (!title || !date || !time || !location || !capacity) {
        return res.status(400).json({ error: 'Please provide all required event details.' });
    }

    db.run(
        `INSERT INTO events (title, date, time, location, description, capacity) VALUES (?, ?, ?, ?, ?, ?)`,
        [title, date, time, location, description, capacity],
        function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({
                message: 'Event created successfully',
                id: this.lastID
            });
        }
    );
});

// 4. Admin: Get all registrations
app.get('/api/registrations', (req, res) => {
    const query = `
        SELECT r.id, r.student_name, r.student_id_number, r.email, e.title as event_title 
        FROM registrations r
        JOIN events e ON r.event_id = e.id
        ORDER BY r.id DESC
    `;
    db.all(query, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// Fallback logic
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Closed the database connection.');
        process.exit(0);
    });
});
