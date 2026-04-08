# 🏥 Victoria Hospital Appointment App

A full-stack mobile application for hospital appointment management.

---

## 🚀 Tech Stack

* 📱 Frontend: React Native (Expo)
* 🌐 Backend: Node.js + Express.js
* 🗄️ Database: MongoDB
* 🔐 Authentication: JWT

---

## 🔗 Repository

```bash
git clone https://github.com/ChamiduPrabodya/Victoria-hospital.git
cd Victoria-hospital
```

---

## 📁 Project Structure

```
Victoria-hospital/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── utils/
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── navigation/
│   ├── screens/
│   ├── services/
│   ├── utils/
│   ├── App.js
│   ├── app.json
│   ├── babel.config.js
│   ├── eslint.config.js
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Prerequisites

Install the following:

* Node.js
* npm
* Git
* Expo Go (mobile app)
* MongoDB Atlas (or local MongoDB)

---

## 🚀 How to Run the Project

---

## 1️⃣ Backend Setup

```bash
cd backend
npm install
```

### Create `.env` file

```bash
cp .env.example .env
```

👉 For Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

### Update `.env`

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run backend

```bash
npm run dev
```

Backend runs at:

```
http://localhost:5000
```

---

## 2️⃣ Frontend Setup (Mobile App)

Open a new terminal:

```bash
cd frontend
npm install
npx expo start
```

* Open **Expo Go** on your phone
* Scan the QR code
* Make sure phone & PC are on same WiFi

---

## 🌐 API Configuration (IMPORTANT)

Edit file:

```
frontend/services/api.js
```

Set your local IP address:

```js
baseURL: "http://YOUR_IP:5000/api"
```

Example:

```
http://192.168.1.10:5000/api
```

❌ Do NOT use `localhost`
✅ Always use your PC IP address

---

## 🔄 Update Project (Team Members)

```bash
git pull origin main
```

---

## 🛠 Git Commands

```bash
git status
git add .
git commit -m "your message"
git push origin main
```

---

## ⚠️ Important Notes

* Do NOT upload `.env`
* Do NOT upload `node_modules`
* Use `.env.example`
* Empty folders will NOT appear in Git (use `.gitkeep` if needed)

---

## 🔥 Features

* User Authentication (JWT)
* Role-based access (Admin/User)
* Patient Management
* Doctor Management
* Appointment Booking
* Department Management
* Medical Records

---

## 🌍 Deployment (Final Demo)

* Backend → Render / Railway / AWS
* Database → MongoDB Atlas
* Mobile App → Connect to deployed API

---

## 📄 License

This project is for academic purposes.
