# 📦 MVC Backend
###  Node.js & Express

A structured backend REST API built using **Node.js, Express, MongoDB, and Mongoose** following the **MVC (Model–View–Controller)** architecture.

This project demonstrates authentication, CRUD operations, middleware handling, and clean folder structure for scalable backend development.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt (Password hashing)
- JSON Web Token (JWT)
- dotenv

---

## 🏗️ Project Structure (MVC)

```
project-root/
│
├── models/
│   ├── user.model.js
│   └── post.model.js
│
├── controllers/
│   ├── user.controller.js
│   └── post.controller.js
│
├── routes/
│   ├── user.routes.js
│   └── post.routes.js
│
├── middleware/
│   └── auth.middleware.js
│
├── config/
│   └── db.js
│
├── app.js
├── server.js
└── .env
```

---

## 🔐 Features

- User Registration
- User Login
- Logout
- Password Hashing (bcrypt)
- JWT Authentication
- Protected Routes
- Full CRUD Operations
- Error Handling Middleware
- Clean MVC Architecture

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create a `.env` File

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
node server.js
```

Server will run at:

```
http://localhost:5000
```

---

## 📌 API Endpoints

### 🔑 Authentication Routes

| Method | Endpoint | Description |
|--------|----------|------------|
| POST | /api/users/register | Register a new user |
| POST | /api/users/login | Login user |
| POST | /api/users/logout | Logout user |

---

### 📝 Post Routes

| Method | Endpoint | Description |
|--------|----------|------------|
| POST | /api/posts | Create a post |
| GET | /api/posts | Get all posts |
| Patch | /api/patch/:id | Update post |
| DELETE | /api/posts/:id | Delete post |

---

## 🔒 Authentication Flow

1. User registers
2. Password is hashed using bcrypt
3. User logs in
4. Creates  some posts

Example header:

```
Authorization: Bearer <your_token>
```

---

## 🛡️ Security Practices

- Password hashing with bcrypt

- Environment variables for secrets
- Proper error handling
- Protected routes

---

## 📈 Future Improvements

- Role-based authorization
- Refresh tokens
- Email verification
- Rate limiting
- Unit testing (Jest)
- API documentation (Swagger)

---

## 👨‍💻 Author

**Bhuvan A**  
Backend Developer | Node.js | Express | MongoDB
