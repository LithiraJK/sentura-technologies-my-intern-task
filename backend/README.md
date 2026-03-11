# Backend - World Countries API

## 🚀 Spring Boot REST API

A RESTful API service that fetches and provides country data from the REST Countries API. Built with Spring Boot, this backend serves as the data provider for the World Countries Explorer frontend application.

---

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Configuration](#configuration)
- [Testing](#testing)

---

## ✨ Features

- ✅ RESTful API architecture
- ✅ Integration with external REST Countries API
- ✅ Data caching for improved performance
- ✅ Standardized `APIResponse<T>` wrapper for all responses
- ✅ CORS configuration for frontend integration
- ✅ Clean layered architecture (Controller → Service → DTO)
- ✅ Error handling and logging
- ✅ Maven build automation

---

## 🛠 Technology Stack

- **Java** 17+
- **Spring Boot** 3.5.11
- **Spring Web** - RESTful web services
- **Spring Cache** - Data caching
- **Spring DevTools** - Development productivity
- **Maven** - Build and dependency management
- **RestTemplate** - HTTP client for external API calls

---

## 📁 Project Structure

```
backend/
├── src/
│   ├── main/
│   │   ├── java/lk/ijse/backend/
│   │   │   ├── BackendApplication.java          # Main Spring Boot application
│   │   │   ├── config/
│   │   │   │   └── AppConfig.java               # CORS & Bean configuration
│   │   │   ├── controller/
│   │   │   │   └── CountryController.java       # REST API endpoints
│   │   │   ├── dto/
│   │   │   │   ├── APIResponse.java             # Generic response wrapper
│   │   │   │   └── CountryDTO.java              # Country data transfer object
│   │   │   └── service/
│   │   │       └── CountryService.java          # Business logic & external API integration
│   │   └── resources/
│   │       └── application.properties            # Application configuration
│   └── test/
│       └── java/lk/ijse/backend/
│           └── BackendApplicationTests.java      # Unit tests
├── target/                                       # Compiled classes (generated)
├── pom.xml                                       # Maven configuration
├── mvnw                                          # Maven wrapper (Unix)
└── mvnw.cmd                                      # Maven wrapper (Windows)
```

---

## 🚀 Setup Instructions

### Prerequisites

- **Java JDK** 17 or higher
- **Maven** 3.6+ (or use included wrapper)
- **Internet connection** (to fetch data from REST Countries API)

### Installation & Running

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Build the project:**
   ```bash
   ./mvnw clean install
   ```
   
   **Windows:**
   ```cmd
   mvnw.cmd clean install
   ```

3. **Run the application:**
   ```bash
   ./mvnw spring-boot:run
   ```
   
   **Windows:**
   ```cmd
   mvnw.cmd spring-boot:run
   ```

4. **Verify it's running:**
   - Backend will start on `http://localhost:8080`
   - Test endpoint: `http://localhost:8080/api/countries`

---

## 📡 API Endpoints

### Base URL
```
http://localhost:8080/api
```

### Get All Countries

**Endpoint:**
```http
GET /api/countries
```

**Description:**  
Fetches all countries from the REST Countries API and returns them in a standardized format.

**Response:**
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
    },
    {
      "name": "Canada",
      "capital": "Ottawa",
      "region": "Americas",
      "population": 38005238,
      "flag": "https://flagcdn.com/w320/ca.png"
    }
  ]
}
```

**Response Status Codes:**
- `200 OK` - Successfully fetched countries
- `500 Internal Server Error` - Error fetching data from external API

---

## 🏗 Architecture

### Layered Architecture

```
┌─────────────────────────────────┐
│   CountryController.java        │  ← REST API Layer
│   (@RestController)             │
└────────────┬────────────────────┘
             │
             ▼
┌─────────────────────────────────┐
│   CountryService.java           │  ← Business Logic Layer
│   (@Service)                    │
└────────────┬────────────────────┘
             │
             ▼
┌─────────────────────────────────┐
│   External REST Countries API   │  ← Data Source
│   (https://restcountries.com)   │
└─────────────────────────────────┘
```

### Key Components

#### 1. **CountryController** (`controller/CountryController.java`)
- Handles HTTP requests
- Maps endpoints using `@GetMapping`
- Returns `ResponseEntity<APIResponse<List<CountryDTO>>>`

#### 2. **CountryService** (`service/CountryService.java`)
- Contains business logic
- Uses `RestTemplate` to call external API
- Transforms external API response to `CountryDTO`
- Implements caching mechanism

#### 3. **DTOs** (`dto/`)
- **APIResponse\<T\>**: Generic wrapper for all API responses
  - `status`: HTTP status code
  - `message`: Response message
  - `data`: Generic type T (actual data)
  
- **CountryDTO**: Data model for country information
  - `name`: Country name
  - `capital`: Capital city
  - `region`: Geographic region
  - `population`: Population count
  - `flag`: Flag image URL

#### 4. **AppConfig** (`config/AppConfig.java`)
- CORS configuration for frontend access
- Bean definitions (RestTemplate)

---

## ⚙️ Configuration

### `application.properties`

```properties
# Server Configuration
server.port=8080

# Add any custom configurations here
```

### CORS Configuration

Configured in `AppConfig.java` to allow requests from:
```java
allowedOrigins: http://localhost:5173
allowedMethods: GET, POST, PUT, DELETE
```

---

## 🧪 Testing

### Run Tests

```bash
./mvnw test
```

**Windows:**
```cmd
mvnw.cmd test
```

### Run Tests with Coverage

```bash
./mvnw test jacoco:report
```

---

## 🔧 Development

### Hot Reload (DevTools)

Spring Boot DevTools is included for automatic application restart during development.

### Building for Production

```bash
./mvnw clean package
```

This creates a JAR file in the `target/` directory:
```
target/backend-0.0.1-SNAPSHOT.jar
```

### Running the JAR

```bash
java -jar target/backend-0.0.1-SNAPSHOT.jar
```

---

## 📝 API Integration Details

### External API
**REST Countries API**: https://restcountries.com/v3.1/all

**Data Mapping:**
```java
External API → CountryDTO
─────────────────────────────
name.common → name
capital[0] → capital
region → region
population → population
flags.png → flag
```

### Caching Strategy

The service implements caching to reduce external API calls:
- First request: Fetches from REST Countries API
- Subsequent requests: Returns cached data
- Cache invalidation: On application restart

---

## 🐛 Troubleshooting

### Common Issues

**1. Port 8080 already in use**
```bash
# Find process using port 8080
netstat -ano | findstr :8080

# Kill the process (Windows - replace PID)
taskkill /PID <PID> /F
```

**2. External API not responding**
- Check internet connection
- Verify REST Countries API status: https://restcountries.com

**3. CORS errors**
- Verify frontend is running on `http://localhost:5173`
- Check CORS configuration in `AppConfig.java`

---

## 📚 Dependencies

### Main Dependencies (pom.xml)

```xml
<dependencies>
    <!-- Spring Boot Web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    
    <!-- Spring Boot Cache -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-cache</artifactId>
    </dependency>
    
    <!-- Spring Boot DevTools -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-devtools</artifactId>
        <scope>runtime</scope>
    </dependency>
    
    <!-- Spring Boot Test -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
```

---

## 📄 License

This project is created for educational and assessment purposes for Sentura Technologies Internship (2026).

---

## 👨‍💻 Author

**Internship Candidate - Sentura Technologies (2026)**

---

## 🔗 Resources

- [Spring Boot Documentation](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/)
- [REST Countries API Documentation](https://restcountries.com)
- [Maven Documentation](https://maven.apache.org/guides/)

---

**Happy Coding! 🚀**
