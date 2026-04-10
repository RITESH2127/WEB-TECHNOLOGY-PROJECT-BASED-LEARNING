// public/js/admin.js

document.addEventListener('DOMContentLoaded', () => {
    // Navigation Logic
    const tabs = document.querySelectorAll('#admin-nav-tabs a');
    const panels = document.querySelectorAll('.admin-panel');
    const createBtn = document.getElementById('btn-create-event');
    const createPanel = document.getElementById('create-event-panel');
    const closeCreate = document.getElementById('close-create');

    function switchTab(targetId) {
        // Hide all main panels but ignore the create modal if we want
        panels.forEach(panel => {
            if (panel.id !== 'create-event-panel') {
                panel.classList.remove('active-panel');
                panel.classList.add('hidden');
            }
        });
        
        const targetPanel = document.getElementById(targetId);
        targetPanel.classList.remove('hidden');
        targetPanel.classList.add('active-panel');

        tabs.forEach(t => t.classList.remove('active'));
        document.querySelector(`[data-target="${targetId}"]`).classList.add('active');

        if (targetId === 'registrations-list') {
            loadRegistrations();
        } else if (targetId === 'events-list') {
            loadAdminEvents();
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab(e.target.dataset.target);
        });
    });

    createBtn.addEventListener('click', () => {
        createPanel.classList.remove('hidden');
        createPanel.classList.add('active-panel');
        // also hide others to keep it clean
        panels.forEach(panel => {
            if (panel.id !== 'create-event-panel') {
                panel.classList.remove('active-panel');
                panel.classList.add('hidden');
            }
        });
    });

    closeCreate.addEventListener('click', () => {
        switchTab('registrations-list');
    });

    // Form submission
    const form = document.getElementById('create-event-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const msgDiv = document.getElementById('admin-msg');
        msgDiv.className = 'msg';
        msgDiv.textContent = 'Publishing...';
        msgDiv.style.display = 'block';

        const formData = {
            title: document.getElementById('event-title').value,
            date: document.getElementById('event-date').value,
            time: document.getElementById('event-time').value,
            location: document.getElementById('event-location').value,
            capacity: document.getElementById('event-capacity').value,
            description: document.getElementById('event-desc').value,
        };

        try {
            const res = await fetch('/api/events', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();

            if (!res.ok) throw new Error(data.error || 'Failed to create event');

            msgDiv.className = 'msg success';
            msgDiv.textContent = 'Event published successfully!';
            form.reset();
            
            setTimeout(() => {
                createPanel.classList.add('hidden');
                msgDiv.style.display = 'none';
                if (document.getElementById('events-list').classList.contains('active-panel')) {
                    loadAdminEvents(); // refresh list if open
                }
            }, 2000);

        } catch (err) {
            msgDiv.className = 'msg error';
            msgDiv.textContent = err.message;
        }
    });

    // Initial load
    loadRegistrations();
});

async function loadRegistrations() {
    const tbody = document.getElementById('registrations-tbody');
    try {
        const res = await fetch('/api/registrations');
        const data = await res.json();
        
        tbody.innerHTML = '';
        if (data.data.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" class="text-center" style="padding: 2rem; color: var(--text-secondary);">No registrations found.</td></tr>';
            return;
        }

        data.data.forEach(reg => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>#${reg.id}</td>
                <td style="font-weight: 600;">${reg.student_name}</td>
                <td><span style="font-family: monospace; background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px;">${reg.student_id_number}</span></td>
                <td>${reg.email}</td>
                <td><span class="highlight">${reg.event_title}</span></td>
            `;
            tbody.appendChild(tr);
        });

    } catch (err) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center" style="color: var(--danger);">Failed to load registrations.</td></tr>';
    }
}

async function loadAdminEvents() {
    const container = document.getElementById('admin-events-container');
    try {
        const res = await fetch('/api/events');
        const data = await res.json();
        
        container.innerHTML = '';
        if (data.data.length === 0) {
            container.innerHTML = '<p class="text-center full-width" style="color: var(--text-secondary);">No events created yet.</p>';
            return;
        }

        data.data.forEach(event => {
            const card = document.createElement('div');
            card.className = 'event-card glass-effect';
            
            const d = new Date(event.date);
            const formattedDate = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric'});

            card.innerHTML = `
                <div class="event-date-badge">${formattedDate}</div>
                <h3>${event.title}</h3>
                <div class="meta">
                    <span>🕒 ${event.time}</span> | <span>📍 ${event.location}</span>
                </div>
                <div style="margin-top: 1rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
                    <span style="font-size: 0.85rem; color: var(--text-secondary);">Capacity: ${event.capacity}</span>
                </div>
            `;
            container.appendChild(card);
        });

    } catch (err) {
        container.innerHTML = '<p class="text-center full-width" style="color: var(--danger);">Failed to load events.</p>';
    }
}
