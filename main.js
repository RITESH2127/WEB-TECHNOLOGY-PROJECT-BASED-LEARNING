// public/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    fetchEvents();

    const modal = document.getElementById('registration-modal');
    const closeBtn = document.querySelector('.close-btn');
    const form = document.getElementById('registration-form');

    // Close modal handlers
    closeBtn.addEventListener('click', () => {
        closeModal();
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const msgDiv = document.getElementById('form-msg');
        msgDiv.className = 'msg';
        msgDiv.textContent = 'Submitting...';
        msgDiv.style.display = 'block';

        const formData = {
            event_id: document.getElementById('event-id').value,
            student_name: document.getElementById('student-name').value,
            student_id_number: document.getElementById('student-id').value,
            email: document.getElementById('student-email').value,
        };

        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();

            if (!res.ok) throw new Error(data.error || 'Failed to register');

            msgDiv.className = 'msg success';
            msgDiv.textContent = 'Success! You are registered for the event.';
            form.reset();
            
            setTimeout(() => {
                closeModal();
                msgDiv.style.display = 'none';
            }, 3000);

        } catch (err) {
            msgDiv.className = 'msg error';
            msgDiv.textContent = err.message;
        }
    });
});

async function fetchEvents() {
    const container = document.getElementById('events-container');
    const loader = document.getElementById('events-loader');

    try {
        const res = await fetch('/api/events');
        const data = await res.json();

        loader.style.display = 'none';

        if (data.data.length === 0) {
            container.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color: var(--text-secondary);">No upcoming events at the moment. Check back later!</p>';
            return;
        }

        data.data.forEach(event => {
            const card = document.createElement('div');
            card.className = 'event-card glass-effect';
            
            // Format Date
            const d = new Date(event.date);
            const formattedDate = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric'});

            card.innerHTML = `
                <div class="event-date-badge">${formattedDate}</div>
                <h3>${event.title}</h3>
                <div class="meta">
                    <span>🕒 ${event.time}</span> | <span>📍 ${event.location}</span>
                </div>
                <p>${event.description}</p>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size: 0.85rem; color: var(--text-secondary);">Capacity: ${event.capacity}</span>
                    <button class="btn btn-primary" onclick="openRegistration(${event.id}, '${event.title.replace(/'/g, "\\'")}')">Register</button>
                </div>
            `;
            container.appendChild(card);
        });

    } catch (err) {
        loader.textContent = 'Failed to load events. Please try again.';
        console.error(err);
    }
}

function openRegistration(eventId, eventTitle) {
    const modal = document.getElementById('registration-modal');
    document.getElementById('event-id').value = eventId;
    document.getElementById('modal-event-title').textContent = eventTitle;
    document.getElementById('form-msg').style.display = 'none';
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('registration-modal');
    modal.classList.add('hidden');
}
