# Movies & TV Shows Backend 🎬

This is the backend of the Movies and TV Shows Manager app. Built with **Node.js**, **Express**, **Prisma ORM**, and deployed on **Render**.

---

## 🧱 Tech Stack

- Node.js
- Express.js
- Prisma ORM
- MySQL (Railway)
- JWT Auth
- CORS

---

## 🔗 Live API

[Backend API on Render](https://movies-and-tv-shows-backend.onrender.com)

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/Raman-Nagar/Movies-and-TV-Shows-backend.git
cd movies-backend
```
### 2. Install Dependencies

```bash
npm install
```
### 3. Set Environment Variables

| Key            | Value (example)                                             |
| -------------- | ----------------------------------------------------------- |
| `PORT`         | `10000` (or leave default)                                  |
| `DATABASE_URL` | `mysql://user:password@host:port/dbname` (from Railway)     |
| `JWT_SECRET`   | `yourSecretKey`                                             |
| `CORS_ORIGIN`  | `https://your-frontend.vercel.app` (or `*` for development) |

### 4. Migrate DB & Seed (Optional)

```bash
npx prisma migrate dev
```
### 5. Start the Server

```bash
npm run dev
```
---

