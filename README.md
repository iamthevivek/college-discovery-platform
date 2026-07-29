# CollegeFinder 🎓

A modern full stack college discovery platform built using Next.js, Prisma, PostgreSQL, and NextAuth. Users can explore colleges across India, search and filter institutions, save favorite colleges, and view detailed college information with placements, fees, ratings, and courses.

---

# 🚀 Live Demo

https://college-discovery-platform-rho-five.vercel.app/

---

# ✨ Features

- 🔍 Search colleges by name or city
- 🏫 Filter colleges by category
- ❤️ Save favorite colleges
- 🔐 Google Authentication with NextAuth
- 📄 Detailed college pages
- 📊 Placement statistics
- 💰 Fees and package information
- 📱 Fully responsive modern UI
- ⚡ Fast performance using Next.js 16
- 🗄️ PostgreSQL database with Prisma ORM
- ☁️ Deployed on Vercel

---

# 🛠️ Tech Stack

## Frontend
- Next.js 16
- React 19
- TypeScript
- CSS

## Backend
- Next.js API Routes
- Prisma ORM
- PostgreSQL (Neon DB)

## Authentication
- NextAuth.js
- Google OAuth

## Deployment
- Vercel

---

# 📂 Folder Structure

college-discovery/
│
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   ├── colleges/
│   │   ├── saved/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── CollegeCard.tsx
│   │   ├── Navbar.tsx
│   │   └── SaveButton.tsx
│   │
│   └── lib/
│       ├── auth.ts
│       └── prisma.ts
│
├── .env
├── package.json
└── README.md

---

# ⚙️ Installation

## Clone Repository

git clone https://github.com/iamthevivek/college-discovery-platform.git

cd college-discovery-platform

---

## Install Dependencies

npm install

---

# 🗄️ Database Setup

## Push Prisma Schema

npx prisma db push

## Seed Database

npx tsx prisma/seed.ts

---

# ▶️ Run Project

npm run dev

Open:

http://localhost:3000

---

## Deploy on Vercel

1. Import GitHub repository into Vercel
2. Add environment variables
3. Deploy project

---

# 🌍 Environment Variables for Vercel

DATABASE_URL

NEXTAUTH_SECRET

NEXTAUTH_URL

GOOGLE_CLIENT_ID

GOOGLE_CLIENT_SECRET

---

# 📸 Features Included

✅ College Search

✅ Category Filters

✅ College Detail Pages

✅ Save Colleges

✅ Google Login

✅ Responsive Design

✅ Prisma + PostgreSQL

✅ Vercel Deployment

---

# 👨‍💻 Author

Vivek Sarode

GitHub:
https://github.com/iamthevivek

---

# 📜 License

This project is created for educational and portfolio purposes.

---

# ⭐ Future Improvements

- College comparison system
- AI recommendations
- Reviews & ratings
- Dark mode
- Admin dashboard
- Advanced filters

---

# 🙌 Acknowledgements

- Next.js
- Prisma
- Neon PostgreSQL
- NextAuth
- Vercel
- Google OAuth
