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

Install:

* Node.js
* npm
* Git
* Expo Go (mobile)
* MongoDB Atlas (or local DB)

---

## 🛠 Backend Setup

```bash
cd backend
npm install
```

Create `.env`:

```bash
cp .env.example .env
```

👉 Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Update `.env`:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
```

Run backend:

```bash
npm run dev
```

---

## 📱 Frontend Setup

```bash
cd frontend
npm install
npx expo start
```

* Open Expo Go
* Scan QR code
* Same WiFi required

---

## 🌐 API Configuration (IMPORTANT)

File:

```
frontend/services/api.js
```

```js
import axios from "axios";

const API = axios.create({
  baseURL: "http://YOUR_IP:5000/api",
});

export default API;
```

❌ Do NOT use:

```
localhost
```

✅ Use:

```
192.168.x.x
```

---

## 👥 Team Setup

```bash
git clone https://github.com/ChamiduPrabodya/Victoria-hospital.git
cd Victoria-hospital
```

### Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npx expo start
```

---

## 🔄 Git Workflow

### Check changes

```bash
git status
```

### Add files

```bash
git add .
```

### Commit

```bash
git commit -m "message"
```

### Push

```bash
git push origin main
```

### Pull updates

```bash
git pull origin main
```

---

## ⚠️ Important Git Notes

### ❌ Empty folders not tracked

Fix:

```powershell
New-Item backend/config/.gitkeep -ItemType File
New-Item backend/controllers/.gitkeep -ItemType File
New-Item backend/middleware/.gitkeep -ItemType File
New-Item backend/models/.gitkeep -ItemType File
New-Item backend/routes/.gitkeep -ItemType File
New-Item backend/uploads/.gitkeep -ItemType File
New-Item backend/utils/.gitkeep -ItemType File
```

Then:

```bash
git add .
git commit -m "Add folders"
git push
```

---

## ❗ Common Problems

### nothing to commit

→ No new files OR only empty folders

### not a git repository

→ You are outside project folder

### touch not working

→ Use PowerShell:

```powershell
New-Item filename -ItemType File
```

### friend can't see update

→ Run:

```bash
git push
```

Friend:

```bash
git pull origin main
```

---

## 📌 .gitignore

```
node_modules/
.env
.expo/
.vscode/
```

---

## 🔥 Features

* Authentication (JWT)
* Role-based access
* Patient management
* Doctor management
* Appointment booking
* Department management
* Medical records

---

## 🧠 Workflow

```bash
git pull origin main
git add .
git commit -m "update"
git push
```

---

## 🚀 Deployment

* Backend → Render / Railway
* DB → MongoDB Atlas
* App → Connect to live API

---

## 📄 License

Academic project only
