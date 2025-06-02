# 🏛️ BMC Website

A modern full-stack web application designed for  (BMC) using React.js for the frontend and Django for the backend.

---

## 📚 Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
   - [Frontend Setup](#frontend-setup)
   - [Backend Setup](#backend-setup)
5. [Running the Project](#running-the-project)
6. [Project Structure](#project-structure)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

---

## 📖 Overview

This project serves as a Website for managing BMC operations efficiently. The system provides an interactive frontend for users and a robust backend for administrators and API interactions.

---

## ✨ Features

- Clean and responsive user interface
- REST API powered by Django
- Authentication and user roles (future feature)
- Scalable codebase for rapid development
- Modular frontend and backend separation

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- JavaScript (ES6+)
- Tailwind CSS or Bootstrap
  

**Backend:**
- Python
- Django & Django REST Framework
- SQLite (Development DB)

---

## 🚀 Getting Started

### 📦 Prerequisites

Ensure the following are installed on your system:

- Node.js and npm
- Python 3.8 or above
- pip (Python package installer)

---

### 🖥️ Project Setup

```bash
# Navigate to the frontend folder
cd frontend

# Install dependencies
npm install

# Run the development server
npm run dev

# Run the  Backend Server

# Navigate to the backend directory
cd backend

# Enter the Django project directory
cd bmcapi

# Apply database migrations
python manage.py makemigrations
python manage.py migrate

# Start the Django development server
python manage.py runserver


