<div align="center">
  <h1>🎉 Department Event Management Portal</h1>
  <p><i>A sleek, modern, and engaging platform to manage and discover department events.</i></p>
  
  ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
  ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
  ![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
</div>

---

## 🌟 Overview
The **Department Event Management Portal** is a full-stack web application designed to simplify the process of organizing, discovering, and registering for academic and extracurricular activities. It offers a beautiful and intuitive user interface along with a robust backend, ensuring a seamless experience for both students and administrators.

<br>

## ✨ Key Features

### 🎓 For Students
- **Interactive Event Discovery**: Browse upcoming events presented in an engaging card layout.
- **Easy Registration**: Quick and hassle-free registration process with instant confirmation.
- **Responsive Design**: Flawlessly adapts to mobile, tablet, and desktop screens.

### 🛡️ For Administrators
- **Event Creation**: Easily schedule new events with details like capacity, timing, and location.
- **Registration Dashboard**: A dedicated view to monitor all student registrations in real-time.
- **Centralized Data**: Secure SQLite database handling all dynamic data securely.

<br>

## 🚀 Getting Started

Follow these instructions to get a copy of the project running on your local machine for development and testing.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd "wt pbl"
   ```

2. **Install all dependencies**:
   ```bash
   npm install
   ```

3. **Start the application**:
   ```bash
   node server.js
   ```
   > 💡 *Note: Using `node server.js` bypasses potential PowerShell execution policy restrictions that might block `npm start`.*

4. **Access the portal**:
   Open your browser and navigate to: [http://localhost:3000](http://localhost:3000)

<br>

## 🛠️ Tech Stack & Architecture

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | SQLite3 (`database.db`) |

<br>

## 📂 Project Structure

```text
📁 wt pbl
 ├── 📄 server.js             # Entry point & Express server setup
 ├── 📄 database.db           # SQLite Database (auto-generated)
 ├── 📄 package.json          # Node dependencies & scripts
 └── 📁 public                # Frontend static files
      ├── 📄 index.html       # Landing & student view page
      ├── 📄 admin.html       # Admin dashboard page
      ├── 📁 css              # Stylesheets
      └── 📁 js               # Client-side JavaScript
```

<br>

## 🔌 API Endpoints
The backend exposes the following RESTful endpoints:

- `GET /api/events` - Fetch all upcoming events records.
- `POST /api/register` - Submit a new student registration form.
- `POST /api/events` - Create a new event into the database (Admin only).
- `GET /api/registrations` - Fetch a table-ready list of all student registrations (Admin only).

---

<div align="center">
  <i>Built with passion and a focus on beautiful web aesthetics.</i>
</div>
