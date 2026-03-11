# Sentura Technologies Internship Practical Test (2026)

## 🌍 World Countries Explorer

A full-stack web application that displays comprehensive information about countries around the world. The application features a Spring Boot backend that fetches data from the REST Countries API and a modern React frontend with TypeScript and Tailwind CSS.

---

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [API Documentation](#api-documentation)
- [Frontend Features](#frontend-features)
- [Screenshots](#screenshots)

---

## ✨ Features

### Backend (Spring Boot)
- ✅ RESTful API endpoint for country data
- ✅ Integration with REST Countries API (https://restcountries.com/v3.1/all)
- ✅ Data caching for improved performance
- ✅ Standardized API response structure
- ✅ CORS configuration for frontend integration

### Frontend (React + TypeScript)
- ✅ Responsive data table with country information
- ✅ Real-time search functionality
- ✅ Interactive country details modal
- ✅ Loading states and error handling
- ✅ Modern UI with Tailwind CSS
- ✅ Fully typed with TypeScript

---

## 🛠 Technology Stack

### Backend
- **Java** 17+
- **Spring Boot** 3.x
- **Maven** - Dependency management
- **RestTemplate** - HTTP client for external API

### Frontend
- **React** 19.1.1
- **TypeScript** 5.9.3
- **Vite** 7.1.7 - Build tool
- **Tailwind CSS** 4.1.16 - Styling
- **Axios** 1.13.1 - HTTP client
- **React Router DOM** 7.9.4

---

## 📁 Project Structure

```
sentura-technologies-my-intern-task/
│
├── backend/                    # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/lk/ijse/backend/
│   │   │   │   ├── BackendApplication.java
│   │   │   │   ├── config/
│   │   │   │   │   └── AppConfig.java              # CORS & RestTemplate config
│   │   │   │   ├── controller/
│   │   │   │   │   └── CountryController.java      # REST API endpoints
│   │   │   │   ├── dto/
│   │   │   │   │   ├── APIResponse.java            # Response wrapper
│   │   │   │   │   └── CountryDTO.java             # Country data model
│   │   │   │   └── service/
│   │   │   │       └── CountryService.java         # Business logic
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
│
└── frontend/                   # React TypeScript frontend
    ├── src/
    │   ├── App.tsx                     # Main app component
    │   ├── main.tsx                    # Entry point
    │   ├── index.css                   # Tailwind CSS imports
    │   ├── components/
    │   │   ├── CountryTable.tsx        # Table component
    │   │   └── CountryModal.tsx        # Modal component
    │   ├── pages/
    │   │   └── CountryList.tsx         # Main page with state management
    │   ├── services/
    │   │   └── countryService.ts       # API integration
    │   └── types/
    │       └── country.ts              # TypeScript interfaces
    ├── package.json
    └── vite.config.ts
```

---

## 🚀 Setup Instructions

### Prerequisites
- **Java JDK** 17 or higher
- **Node.js** 18 or higher
- **npm** or **yarn**
- **Maven** (included via wrapper)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Build the project:
   ```bash
   ./mvnw clean install
   ```
   Or on Windows:
   ```cmd
   mvnw.cmd clean install
   ```

3. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```
   Or on Windows:
   ```cmd
   mvnw.cmd spring-boot:run
   ```

4. The backend will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The frontend will start on `http://localhost:5173`

5. Open your browser and visit `http://localhost:5173`

---

## 📡 API Documentation

### Base URL
```
http://localhost:8080/api
```

### Endpoints

#### Get All Countries
```http
GET /api/countries
```

**Response Format:**
```json
{
  "status": 200,
  "message": "Countries fetched successfully",
  "data": [
    {
      "name": "United States",
      "capital": "Washington, D.C.",
      "region": "Americas",
      "population": 331002651,
      "flag": "https://flagcdn.com/w320/us.png"
    }
  ]
}
```

**Response Fields:**
- `status` (number): HTTP status code
- `message` (string): Response message
- `data` (array): Array of country objects

**Country Object:**
- `name` (string): Country name
- `capital` (string): Capital city
- `region` (string): Geographic region
- `population` (number): Population count
- `flag` (string): URL to flag image

---

## 🎨 Frontend Features

### 1. Countries Table
Displays a responsive table with the following columns:
- **Flag**: Country flag image
- **Name**: Country name
- **Capital**: Capital city
- **Region**: Geographic region
- **Population**: Formatted population count

### 2. Search Functionality
- Real-time search input
- Filters countries by name (case-insensitive)
- Shows count of filtered results

### 3. Country Details Modal
- Click any table row to view details
- Modal displays:
  - Large flag image
  - Country name
  - Capital city
  - Region
  - Population
- Click outside modal or "Close" button to dismiss

### 4. UI/UX Features
- Loading spinner while fetching data
- Error handling with user-friendly messages
- Hover effects on table rows
- Clean, modern design with Tailwind CSS
- Fully responsive for mobile and desktop

---

## 🖼 Screenshots

### Main Page
The application displays a searchable table of all countries with their flags, names, capitals, regions, and populations.

### Search Feature
Type in the search box to filter countries in real-time by name.

### Details Modal
Click any country row to view detailed information in a modal popup.

---

## 🧪 Testing

### Backend
Run tests:
```bash
cd backend
./mvnw test
```

### Frontend
Run linting:
```bash
cd frontend
npm run lint
```

Build for production:
```bash
npm run build
```

---

## 📝 Development Notes

### Backend Configuration
- **Port**: 8080 (configured in `application.properties`)
- **CORS**: Enabled for `http://localhost:5173`
- **API Integration**: Uses Spring Boot's RestTemplate
- **Caching**: Countries data is cached after first fetch

### Frontend Configuration
- **Port**: 5173 (Vite default)
- **API Base URL**: `http://localhost:8080/api`
- **Build Tool**: Vite for fast HMR (Hot Module Replacement)
- **Type Safety**: Full TypeScript support

---

## 🤝 Contributing

This is a practical test project for Sentura Technologies internship (2026).

---

## 📄 License

This project is created for educational and assessment purposes.

---

## 👨‍💻 Author

**Internship Candidate - Sentura Technologies (2026)**

---

## 🔗 External APIs

- **REST Countries API**: https://restcountries.com/v3.1/all
  - Provides comprehensive country data
  - Free to use, no authentication required

---

## 📞 Support

For any questions or issues, please contact the development team.

---

**Happy Coding! 🚀**
