
---

````markdown
# 📇 Contact Management App

![Status](https://img.shields.io/badge/status-active-brightgreen)  
A full-stack web application to **create, view, update, and delete** contact information seamlessly.

---

## 🛠️ Tech Stack

| Frontend        | Backend       | Database      | Libraries & Tools        |
|-----------------|---------------|---------------|---------------------------|
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) | ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) | ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?logo=postgresql&logoColor=white) | ![Axios](https://img.shields.io/badge/-Axios-5A29E4?logo=axios&logoColor=white)<br>![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white)<br>![Formik](https://img.shields.io/badge/-Formik-EF5350?logo=data&logoColor=white)<br>![Yup](https://img.shields.io/badge/-Yup-00C853?logoColor=white) |

---

## 🚀 Features

- ✅ Add a new contact
- 📋 View all contacts
- ✏️ Edit existing contacts
- 🗑️ Delete contacts
- 🔍 Search and filter (optional future feature)

---

## 📸 Screenshots

> _Include screenshots or a short demo GIF here._

---

## 🧭 How to Run the App Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/contact-management-app.git
cd contact-management-app
````

### 2️⃣ Backend Setup

```bash
cd server
npm install
node server.js
```

> Make sure PostgreSQL is running, and your `.env` file is configured correctly with DB credentials.

### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

Visit the app at: [http://localhost:5173](http://localhost:5173)

---

## ⚙️ API Endpoints

| Method   | Endpoint            | Description        |
| -------- | ------------------- | ------------------ |
| `GET`    | `/api/contacts`     | Get all contacts   |
| `GET`    | `/api/contacts/:id` | Get single contact |
| `POST`   | `/api/contacts`     | Create contact     |
| `PUT`    | `/api/contacts/:id` | Update contact     |
| `DELETE` | `/api/contacts/:id` | Delete contact     |

---

## ❓ Why This Stack?

* **React**: Fast UI rendering and component reusability.
* **Express + Node.js**: Lightweight and efficient backend API.
* **PostgreSQL**: Robust relational database with great tooling.
* **Formik + Yup**: Reliable form management and validation.

---

## 🚧 Challenges Faced

* Resolving the `Cannot POST /api/contacts` issue caused by route/controller mismatches.
* Fixing SQL errors like *"INSERT has more expressions than target columns"*.
* Ensuring correct form data mapping between frontend and backend.
* Handling 404/500 errors due to misconfigured routes or middleware.

---

## 📦 Folder Structure

```
root/
├── client/        # React Frontend
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── config/
│   └── server.js
└── README.md
```

---

## ✨ Credits

Made with ❤️ by [Cherisha S](https://github.com/Cherisha2023)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

---


