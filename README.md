# 🌐 Connekt

Connekt is a full-stack MERN language exchange platform that enables users to connect with language partners worldwide. Users can create personalized profiles, discover new learners, send friend requests, chat in real time, make video calls, and customize the application's appearance with multiple themes.

---

## ✨ Features

- 🔐 JWT Authentication
- 👤 User Onboarding & Profile Management
- 🖼️ Random Avatar Generator
- 🤝 Friend Requests
- 👥 Friends List
- 💬 Real-Time Chat (Stream Chat)
- 📹 Video Calling (Stream Video SDK)
- 🌍 Language Matching
- 🎨 Multiple DaisyUI Themes
- 📱 Responsive Design

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- DaisyUI
- React Query
- Zustand
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Stream Chat API
- Stream Video SDK

---

## 📁 Project Structure

```
CONNEKT
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── dist/
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
└── package.json
```

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/<your-username>/connekt.git
cd connekt
```

---

## Configure Environment Variables

### Backend (`backend/.env`)

```env
PORT=5001

MONGO_URI=your_mongodb_connection_string

JWT_SECRET_KEY=your_jwt_secret

STREAM_API_KEY=your_stream_api_key

STREAM_API_SECRET=your_stream_api_secret
```

### Frontend (`frontend/.env`)

```env
VITE_STREAM_API_KEY=your_stream_api_key
```

---

# 📦 Install Dependencies

From the project root:

```bash
npm run build
```

This command will:

- Install backend dependencies
- Install frontend dependencies
- Build the frontend

---
## Start the Application

From the project root:

```bash
npm start
```

Visit:

```
http://localhost:5001
```

The Express server serves both the backend API and the built React frontend.

---

## 👨‍💻 Author

**Anwesha Priyadarshini**

GitHub: https://github.com/anwesha-1125

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!
