<div align="center">

# 🚑 TRAFIKKING X

### AI Powered Intelligent Emergency Response Ecosystem

**Saving Lives Through AI, Real-Time Communication & Intelligent Emergency Coordination**

---

![Java](https://img.shields.io/badge/Java-21-orange?style=for-the-badge&logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=springboot)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)
![JWT](https://img.shields.io/badge/JWT-Authentication-black?style=for-the-badge)
![WebSocket](https://img.shields.io/badge/WebSocket-STOMP-blue?style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-Production-2496ED?style=for-the-badge&logo=docker)
![TiDB](https://img.shields.io/badge/TiDB-Cloud-EF4E2A?style=for-the-badge)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-000000?style=for-the-badge)

---

### 🌐 Live Deployment

| Service | URL |
|----------|-----|
| 🌍 Frontend | https://trafikking-x.vercel.app |
| ⚙️ Backend API | https://trafikking-x.onrender.com |
| 📄 Swagger Documentation | https://trafikking-x.onrender.com/swagger-ui/index.html |

</div>

---

# 📖 Overview

TRAFIKKING X is an AI-powered emergency response platform designed to improve the coordination between citizens, dispatchers, ambulance services, hospitals, and police departments during emergency situations.

The platform combines real-time communication, intelligent dispatch recommendations, live incident tracking, and role-based dashboards to reduce emergency response time and streamline rescue operations.

The goal of the project is to simulate a production-grade emergency response ecosystem using modern full-stack technologies and scalable software architecture.

---

# ✨ Key Highlights

- 🚑 AI Assisted Emergency Dispatch
- 🗺️ Real-Time Incident Tracking
- 🏥 Hospital Resource Management
- 🚓 Police Coordination
- 🚑 Ambulance Assignment Engine
- 🔐 JWT Authentication & Authorization
- 📡 Real-Time Communication using WebSockets
- 📍 Live ETA Tracking
- 🧠 Intelligent Recommendation Engine
- 🌍 Cloud Deployment with Docker
- ☁️ TiDB Cloud Database
- ⚡ Modern Responsive User Interface

---

# 🚀 Current Features

## Authentication & Security

- Secure JWT Authentication
- Role-Based Authorization
- Password Encryption
- Protected Routes
- Persistent Login Sessions

---

## Citizen Portal

- Report Emergency Incidents
- View Personal Incident History
- Emergency Contacts
- Nearby Hospitals
- Citizen Dashboard

---

## Dispatcher Command Center

- Live Incident Feed
- Intelligent Dispatch Queue
- AI Recommendation Panel
- Live Dispatch Tracking
- Interactive Emergency Map
- Ambulance Monitoring
- Hospital Monitoring
- Police Monitoring
- Notification Center

---

## Ambulance Module

- Current Mission Dashboard
- Mission History
- Live Ambulance Tracking
- ETA Monitoring
- Route Tracking

---

## Hospital Module

- Incoming Emergency Cases
- Bed Capacity Management
- Case History
- Patient Case Details

---

## Police Module

- Active Emergency Cases
- Case Investigation Details
- Police Case History

---

## AI & Real-Time Features

- AI Dispatch Recommendation Engine
- Intelligent Resource Scoring
- ETA Calculation
- Live Tracking
- Real-Time Notifications
- WebSocket Communication

---

## Deployment

- Dockerized Backend
- Render Cloud Deployment
- Vercel Frontend Deployment
- TiDB Cloud Database

---

# 🚧 In Progress

The following modules are currently under active development.

- Admin Dashboard
- Advanced AI Optimization
- Enhanced Real-Time Communication
- Production Performance Optimization

---

# 🔮 Future Roadmap

The following features are planned for future releases.

- Complete Admin Management System
- AI Incident Prediction
- AI Resource Forecasting
- AI Traffic Prediction
- Push Notifications
- SMS & Email Alerts
- Cloud File Storage
- Analytics Dashboard
- Audit Logs
- CI/CD Pipeline
- Kubernetes Deployment
- Mobile Application

---

# 🛠️ Technology Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React 19, Vite, Tailwind CSS, Shadcn UI, React Router, React Query, Axios |
| **Backend** | Java 21, Spring Boot, Spring Security, Spring Data JPA, Hibernate |
| **Authentication** | JWT Authentication, Role-Based Authorization |
| **Database** | TiDB Cloud (MySQL Compatible) |
| **Real-Time Communication** | WebSocket, STOMP, SockJS |
| **AI Components** | AI Recommendation Engine, Resource Scoring Engine, ETA Calculation |
| **Maps & Tracking** | React Leaflet, OpenStreetMap |
| **Build Tools** | Maven, npm, Vite |
| **Deployment** | Docker, Render, Vercel |
| **Version Control** | Git, GitHub |

---

# 🏗️ System Architecture

```
                           Citizens
                               │
                               │
                               ▼
                    React + Vite Frontend
                               │
             REST API + WebSocket (STOMP)
                               │
                               ▼
                 Spring Boot Backend API
                               │
      ┌──────────────┬───────────────┬───────────────┐
      │              │               │               │
      ▼              ▼               ▼               ▼
 Authentication   Incident Engine  Assignment Engine  AI Engine
      │              │               │               │
      └──────────────┴───────────────┴───────────────┘
                               │
                               ▼
                    Spring Data JPA / Hibernate
                               │
                               ▼
                      TiDB Cloud Database
```

---

# 📂 Project Structure

```text
trafikking-x
│
├── trafikking-x-backend
│   ├── src
│   ├── uploads
│   ├── Dockerfile
│   ├── render.yaml
│   ├── pom.xml
│   └── ...
│
├── trafikking-x-frontend
│   ├── public
│   ├── src
│   ├── .env.example
│   ├── package.json
│   └── ...
│
├── README.md
└── LICENSE
```

---

# 🧩 Backend Architecture

The backend follows a layered architecture with clear separation of responsibilities.

```
Controller
     │
     ▼
Service
     │
     ▼
Repository
     │
     ▼
Database
```

Core backend modules include:

- Authentication
- Incident Management
- Dispatch Engine
- Assignment Engine
- AI Recommendation Engine
- Tracking Engine
- Notification Engine
- Hospital Management
- Ambulance Management
- Police Management

---

# 🎨 Frontend Architecture

The frontend is built using a feature-based architecture for scalability and maintainability.

```
src
│
├── app
├── components
├── config
├── features
├── hooks
├── layouts
├── shared
├── routes
└── utils
```

Each feature is isolated with its own:

- Components
- Hooks
- API Services
- Pages
- Validation
- Utilities

This structure improves maintainability and enables independent feature development.

---

# ⚙️ Getting Started

## Prerequisites

Before running the project locally, make sure you have the following installed:

- Java 21
- Node.js 20+
- Maven 3.9+
- Git
- TiDB Cloud (or MySQL 8+)

---

# 📥 Clone Repository

```bash
git clone https://github.com/anitya66/trafikking-x.git

cd trafikking-x
```

---

# 🚀 Backend Setup

```bash
cd trafikking-x-backend
```

Create your environment configuration.

> Configure your database connection and JWT secret in `application.properties` or through environment variables.

Start the backend.

```bash
./mvnw spring-boot:run
```

Backend will start at

```
http://localhost:8080
```

Swagger Documentation

```
http://localhost:8080/swagger-ui/index.html
```

---

# 💻 Frontend Setup

```bash
cd trafikking-x-frontend
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Frontend will start at

```
http://localhost:5173
```

---

# 🌍 Environment Variables

## Frontend (.env)

```env
VITE_APP_NAME=TRAFIKKING X
VITE_ENV=development

VITE_API_URL=http://localhost:8080/api/v1
VITE_WS_URL=http://localhost:8080/ws

VITE_MAP_PROVIDER=openstreetmap

VITE_LIVEKIT_URL=

VITE_AI_ENABLED=true
```

---

## Backend Environment Variables

| Variable | Description |
|----------|-------------|
| DB_URL | Database JDBC URL |
| DB_USERNAME | Database Username |
| DB_PASSWORD | Database Password |
| JWT_SECRET | Base64 Encoded JWT Secret |
| SPRING_PROFILES_ACTIVE | Spring Profile |

---

# ☁️ Production Deployment

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | TiDB Cloud |
| Containerization | Docker |

---

# 📡 API Documentation

Swagger UI

```
https://trafikking-x.onrender.com/swagger-ui/index.html
```

---

# 🔒 Security

TRAFIKKING X follows modern security practices to protect user data and system resources.

- JWT Authentication
- Role-Based Authorization
- Password Encryption
- Protected REST APIs
- Input Validation
- Secure Environment Variables
- CORS Configuration
- Spring Security Integration

---

# 📸 Screenshots

> Screenshots will be added once the remaining modules are completed and the user interface reaches its final production version.

---

# 🗺️ Project Roadmap

## Completed

- Authentication & Authorization
- Citizen Module
- Dispatcher Command Center
- Ambulance Module
- Hospital Module
- Police Module
- Incident Management
- AI Recommendation Engine
- Assignment Engine
- Live Tracking
- ETA Calculation
- Real-Time Notifications
- WebSocket Communication
- Dockerization
- Cloud Deployment

---

## In Progress

- Admin Module
- Production UI Enhancements
- Performance Optimization
- WebSocket Improvements

---

## Planned

- Complete Admin Dashboard
- AI Incident Prediction
- AI Resource Forecasting
- AI Traffic Prediction
- Analytics Dashboard
- Push Notifications
- SMS & Email Alerts
- Cloud Storage Integration
- CI/CD Pipeline
- Kubernetes Deployment
- Mobile Application

---

# 🤝 Contributing

Contributions, suggestions, and improvements are always welcome.

If you would like to contribute:

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Anitya Kumar**

Java Full Stack Developer

- GitHub: https://github.com/anitya66
- LinkedIn: *(Add your LinkedIn profile here)*

---

<div align="center">

### ⭐ If you found this project helpful, consider giving it a star.

Made with ❤️ using Java, Spring Boot, React, AI and Real-Time Technologies.

</div>
