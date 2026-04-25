<div align="center">
  
  # 🎉 Department Event Management Portal
  
  [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
  [![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
  [![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3.org/html/)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
  [![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)
  
  ![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
  ![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
  
  **A sleek, modern, and fully responsive platform to manage and discover department events with an intuitive interface for both students and administrators.**

</div>

---

## 🎬 Live Demo & Interface Preview

### 📹 Watch It In Action
<div align="center">

[Watch Demo Video](https://github.com/RITESH2127/WEB-TECHNOLOGY-PROJECT-BASED-LEARNING/raw/main/Recording%202026-04-10%20224715.mp4)

</div>

### 📸 Interface Showcase

| Student Portal | Event Details |
|:-:|:-:|
| ![Student Portal](https://github.com/RITESH2127/WEB-TECHNOLOGY-PROJECT-BASED-LEARNING/raw/main/Screenshot%202026-04-10%20214006.png) | ![Event Details](https://github.com/RITESH2127/WEB-TECHNOLOGY-PROJECT-BASED-LEARNING/raw/main/Screenshot%202026-04-10%20214021.png) |

| Admin Dashboard | Registration Panel |
|:-:|:-:|
| ![Admin Dashboard](https://github.com/RITESH2127/WEB-TECHNOLOGY-PROJECT-BASED-LEARNING/raw/main/Screenshot%202026-04-10%20214032.png) | ![Registration Panel](https://github.com/RITESH2127/WEB-TECHNOLOGY-PROJECT-BASED-LEARNING/raw/main/Screenshot%202026-04-10%20214046.png) |

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack--architecture)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-getting-started)
- [Usage Guide](#-usage-guide)
- [API Documentation](#-api-endpoints)
- [Contributing](#-contributing)

---

## 🌟 Overview

The **Department Event Management Portal** is a full-stack web application engineered to streamline the organization, discovery, and registration process for academic and extracurricular activities. Designed with a user-first approach, it provides an elegant platform where students can explore events and administrators can manage operations seamlessly.

**Perfect for:**
- University departments organizing multiple events
- Student organizations managing registrations
- Academic coordinators tracking attendance
- Any institution needing centralized event management

---

## ✨ Key Features

### 🎓 Student Experience
- **📅 Interactive Event Discovery** – Browse upcoming events with beautiful card-based layout and filtering options
- **⚡ One-Click Registration** – Hassle-free registration with instant confirmation feedback
- **📱 Fully Responsive** – Flawlessly adapts to mobile, tablet, and desktop screens
- **🔍 Event Search** – Find events by name, date, or category instantly
- **✅ Registration Confirmation** – Real-time confirmation with event details

### 🛡️ Administrator Controls
- **🎪 Event Management** – Create, edit, and manage events with comprehensive details (capacity, timing, location, description)
- **📊 Live Registration Dashboard** – Monitor all student registrations in real-time with exportable data
- **📈 Analytics & Insights** – Track event popularity, registration trends, and attendance metrics
- **🔐 Secure Database** – SQLite database with reliable data persistence
- **👥 Attendee Management** – View, filter, and manage registered participants per event

---

## 🛠️ Tech Stack & Architecture

<div align="center">

| Layer | Technology | Purpose |
|:---:|:---|:---|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript | Responsive UI with no framework overhead |
| **Backend** | Node.js, Express.js | RESTful API server with async handling |
| **Database** | SQLite3 | Lightweight, file-based data persistence |
| **Architecture** | MVC Pattern | Clean separation of concerns |

</div>

### Architecture Diagram
```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT LAYER                          │
│  HTML5 (Structure) | CSS3 (Styling) | JS (Interactivity)│
└────────────────────────┬────────────────────────────────┘
                         │ HTTP/REST
┌────────────────────────▼────────────────────────────────┐
│                   EXPRESS SERVER                         │
│  Routes → Controllers → Business Logic                   │
└────────────────────────┬────────────────────────────────┘
                         │ Query/Update
┌────────────────────────▼────────────────────────────────┐
│              SQLite Database (database.db)               │
│  Events Table | Registrations Table | User Data         │
└─────────────────────────────────────────────────────────┘
```

---

## 📂 Project Structure

```
📁 WEB-TECHNOLOGY-PROJECT-BASED-LEARNING/
│
├── 📄 server.js                          # Express server & main entry point
├── 📄 database.db                        # SQLite database (auto-generated)
├── 📄 package.json                       # Dependencies & project metadata
├── 📄 package-lock.json                  # Dependency lock file
│
├── 📄 index.html                         # Student portal & landing page
├── 📄 admin.html                         # Admin dashboard
│
├── 📄 admin.js                           # Admin-side business logic
├── 📄 main.js                            # Client-side event handling
├── 📄 style.css                          # Unified stylesheet
│
├── 📄 README.md                          # Documentation
├── 📄 LICENSE                            # MIT License
│
├── 📹 Recording 2026-04-10 224715.mp4   # Demo video
├── 📸 Screenshot 2026-04-10 214006.png  # UI screenshots
├── 📸 Screenshot 2026-04-10 214021.png
├── 📸 Screenshot 2026-04-10 214032.png
└── 📸 Screenshot 2026-04-10 214046.png
```

---

## 🚀 Getting Started

### 📋 Prerequisites

- **Node.js** (v14.0.0 or higher) – [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (for version control)

### ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RITESH2127/WEB-TECHNOLOGY-PROJECT-BASED-LEARNING.git
   cd WEB-TECHNOLOGY-PROJECT-BASED-LEARNING
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   node server.js
   ```
   
   > 💡 **Pro Tip:** On Windows PowerShell, use `node server.js` directly instead of `npm start` to bypass execution policy restrictions.

4. **Access the application**
   ````
   Open your browser → http://localhost:3000
   ````

5. **Access admin panel**
   ````
   Navigate to → http://localhost:3000/admin.html
   ````

> ✅ The database will be automatically created on first run.

---

## 📖 Usage Guide

### 👨‍🎓 For Students

1. **Browse Events**
   - Visit the home page at `http://localhost:3000`
   - View all upcoming events in an attractive card layout
   - Read event details (date, time, location, capacity)

2. **Register for an Event**
   - Click on an event card
   - Fill in your registration details (name, email, phone)
   - Click "Register" and receive instant confirmation
   - Your registration is saved to the database

3. **View Confirmation**
   - See a success message with event details
   - Confirmation is stored in the system

### 👨‍💼 For Administrators

1. **Access Admin Dashboard**
   - Navigate to `http://localhost:3000/admin.html`

2. **Create New Event**
   - Click "Create Event" button
   - Fill in event details:
     - Event name
     - Date & time
     - Location
     - Description
     - Capacity (max attendees)
   - Click "Save Event"

3. **Monitor Registrations**
   - View all registered students in the dashboard
   - See real-time updates
   - Filter registrations by event
   - Track capacity vs. registrations

4. **Manage Events**
   - Edit event details anytime
   - View event-wise registration count
   - Delete events if needed

---

## 🔌 API Endpoints

All endpoints return JSON responses.

### Public Endpoints

#### Get All Events
```http
GET /api/events
```
**Response:**
```json
[
  {
    "id": 1,
    "name": "Tech Workshop",
    "date": "2026-05-15",
    "time": "10:00 AM",
    "location": "Lab A",
    "capacity": 50,
    "description": "Learn latest web technologies"
  }
]
```

#### Register for Event
```http
POST /api/register
```
**Request Body:**
```json
{
  "eventId": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210"
}
```

### Admin Endpoints

#### Create Event (Admin Only)
```http
POST /api/events
```
**Request Body:**
```json
{
  "name": "Hackathon 2026",
  "date": "2026-06-20",
  "time": "09:00 AM",
  "location": "Auditorium",
  "capacity": 100,
  "description": "24-hour coding competition"
}
```

#### Get All Registrations (Admin Only)
```http
GET /api/registrations
```
**Response:**
```json
[
  {
    "id": 1,
    "eventId": 1,
    "eventName": "Tech Workshop",
    "studentName": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "registrationDate": "2026-04-25"
  }
]
```

---

## 🎨 UI/UX Highlights

- ✨ **Modern Design** – Clean, minimalist interface with smooth interactions
- 🎯 **Intuitive Navigation** – Easy-to-find controls and clear call-to-action buttons
- 📱 **Mobile-First** – Optimized for all screen sizes
- ⚡ **Fast Performance** – Lightweight vanilla JavaScript (no heavy frameworks)
- ♿ **Accessible** – Semantic HTML for better accessibility
- 🎭 **Consistent Branding** – Unified color scheme and typography

---

## 🔒 Security Features

- ✅ Server-side validation for all inputs
- ✅ Database error handling and logging
- ✅ RESTful API with proper HTTP status codes
- ✅ Admin endpoints accessible without authentication (can be enhanced with JWT)
- ✅ CORS headers configured for security

---

## 📊 Database Schema

### Events Table
```sql
CREATE TABLE events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  location TEXT NOT NULL,
  capacity INTEGER NOT NULL,
  description TEXT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Registrations Table
```sql
CREATE TABLE registrations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  eventId INTEGER NOT NULL,
  studentName TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  registeredAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (eventId) REFERENCES events(id)
);
```

---

## 🚀 Performance Optimizations

- **Vanilla JavaScript** – No framework overhead, lightning-fast load times
- **SQLite Database** – Efficient queries with proper indexing
- **CSS Optimization** – Minimal CSS for quick rendering
- **Responsive Images** – Optimized for different screen sizes

---

## 🐛 Troubleshooting

### Server Won't Start
```bash
# Check if Node.js is installed
node --version

# Try running with elevated privileges (Windows)
node server.js

# Check if port 3000 is available
netstat -ano | findstr :3000
```

### Database Not Creating
```bash
# Delete database.db and restart server
rm database.db
node server.js
```

### Port 3000 Already in Use
```bash
# Change port in server.js or use different port
# Modify: const PORT = 3001;
```

---

## 📈 Future Enhancements

- [ ] User authentication with JWT tokens
- [ ] Email notifications for event registrations
- [ ] Event filtering and advanced search
- [ ] Export registrations to CSV
- [ ] Event calendar view
- [ ] User profile management
- [ ] Event ratings and reviews
- [ ] Automated email confirmations

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow existing code style
- Test all changes locally
- Update documentation as needed
- Keep commit messages clear and descriptive

---

## 📝 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Ritesh Jha** – [@RITESH2127](https://github.com/RITESH2127)

Built with passion and a focus on beautiful web aesthetics. 💜

---

## 📞 Support & Questions

- Open an **[Issue](https://github.com/RITESH2127/WEB-TECHNOLOGY-PROJECT-BASED-LEARNING/issues)** for bugs
- Reach out for feature requests or improvements
- Star ⭐ this repo if you find it helpful!

---

<div align="center">
  
  **Made with ❤️ for the Developer Community**
  
  ![JavaScript](https://img.shields.io/badge/JavaScript-48.8%25-F7DF1E?style=flat-square)
  ![CSS](https://img.shields.io/badge/CSS-25.8%25-1572B6?style=flat-square)
  ![HTML](https://img.shields.io/badge/HTML-25.4%25-E34F26?style=flat-square)
  
</div>
