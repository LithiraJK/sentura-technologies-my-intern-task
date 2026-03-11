# Frontend - World Countries Explorer

## 🎨 React TypeScript Frontend

A modern, responsive web application for exploring country information. Built with React, TypeScript, and Tailwind CSS, this frontend provides an intuitive interface for browsing and searching country data.

---

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Components](#components)
- [Configuration](#configuration)
- [Development](#development)
- [Build & Deploy](#build--deploy)

---

## ✨ Features

- ✅ **Responsive Data Table** - Display countries with flags, names, capitals, regions, and populations
- ✅ **Real-time Search** - Filter countries by name as you type
- ✅ **Country Details Modal** - Click any row to view detailed information
- ✅ **Loading States** - Animated spinner while fetching data
- ✅ **Error Handling** - User-friendly error messages
- ✅ **Modern UI** - Clean design with Tailwind CSS
- ✅ **Type Safety** - Full TypeScript implementation
- ✅ **Optimized Performance** - Fast build times with Vite

---

## 🛠 Technology Stack

- **React** 19.1.1 - UI library
- **TypeScript** 5.9.3 - Type safety
- **Vite** 7.1.7 - Fast build tool & dev server
- **Tailwind CSS** 4.1.16 - Utility-first CSS framework
- **Axios** 1.13.1 - HTTP client for API calls
- **React Router DOM** 7.9.4 - Routing (if needed)
- **ESLint** 9.36.0 - Code linting

---

## 📁 Project Structure

```
frontend/
├── public/                         # Static assets
├── src/
│   ├── App.tsx                    # Main application component
│   ├── main.tsx                   # Application entry point
│   ├── index.css                  # Global styles (Tailwind imports)
│   │
│   ├── components/                # Reusable UI components
│   │   ├── CountryTable.tsx      # Table component with country list
│   │   └── CountryModal.tsx      # Modal popup for country details
│   │
│   ├── pages/                     # Page components
│   │   └── CountryList.tsx       # Main page with state management
│   │
│   ├── services/                  # API integration
│   │   └── countryService.ts     # Backend API calls
│   │
│   └── types/                     # TypeScript type definitions
│       └── country.ts            # Country and APIResponse interfaces
│
├── index.html                     # HTML entry point
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
├── vite.config.ts                 # Vite configuration
└── eslint.config.js              # ESLint rules
```

---

## 🚀 Setup Instructions

### Prerequisites

- **Node.js** 18+ 
- **npm** 8+ or **yarn** 1.22+
- **Backend API** running on `http://localhost:8080`

### Installation

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   
   Or with yarn:
   ```bash
   yarn install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   
   Or with yarn:
   ```bash
   yarn dev
   ```

4. **Open in browser:**
   - Application will run on `http://localhost:5173`
   - Auto-opens in default browser

---

## 🧩 Components

### 1. **CountryList.tsx** (Main Page)

**Location:** `src/pages/CountryList.tsx`

**Responsibilities:**
- Fetch countries from backend API using `useEffect`
- Manage application state with `useState`:
  - `countries` - All country data
  - `searchTerm` - Search input value
  - `loading` - Loading state
  - `error` - Error messages
  - `selectedCountry` - Currently selected country for modal
- Filter countries based on search term
- Handle row clicks to open modal

**Key State:**
```typescript
const [countries, setCountries] = useState<Country[]>([]);
const [searchTerm, setSearchTerm] = useState<string>("");
const [loading, setLoading] = useState<boolean>(true);
const [error, setError] = useState<string | null>(null);
const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
```

### 2. **CountryTable.tsx** (Table Component)

**Location:** `src/components/CountryTable.tsx`

**Props:**
```typescript
interface CountryTableProps {
  countries: Country[];
  onRowClick: (country: Country) => void;
}
```

**Features:**
- Displays responsive table with 5 columns
- Hover effects on rows
- Clickable rows
- "No countries found" message when filtered list is empty
- Formatted population numbers (with commas)

### 3. **CountryModal.tsx** (Details Modal)

**Location:** `src/components/CountryModal.tsx`

**Props:**
```typescript
interface CountryModalProps {
  country: Country | null;
  onClose: () => void;
}
```

**Features:**
- Overlay backdrop (dark background)
- Click outside to close
- Large flag image display
- Grid layout for information
- Close button (top-right × and bottom button)

### 4. **countryService.ts** (API Service)

**Location:** `src/services/countryService.ts`

**Functions:**
```typescript
export const getAllCountries = async (): Promise<Country[]>
```

**Features:**
- Axios HTTP client
- Connects to `http://localhost:8080/api/countries`
- Extracts data from `APIResponse<T>` wrapper
- Error handling with console logging

---

## 📝 TypeScript Interfaces

### Country Interface
```typescript
export interface Country {
  name: string;        // Country name
  capital: string;     // Capital city
  region: string;      // Geographic region
  population: number;  // Population count
  flag: string;        // Flag image URL
}
```

### APIResponse Interface
```typescript
export interface APIResponse<T> {
  status: number;      // HTTP status code
  message: string;     // Response message
  data: T;            // Generic data (any type)
}
```

---

## ⚙️ Configuration

### API Configuration

**Backend URL:** Configured in `src/services/countryService.ts`
```typescript
const API_BASE_URL = "http://localhost:8080/api";
```

### Vite Configuration

**File:** `vite.config.ts`
```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
})
```

### Tailwind CSS

**File:** `src/index.css`
```css
@import "tailwindcss";
```

**Tailwind is configured via:** `tailwind.config.js` (if present) or uses default configuration.

---

## 🧪 Development

### Available Scripts

```bash
# Start development server (Hot reload enabled)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

### Development Mode

- **Hot Module Replacement (HMR)** - Changes reflect instantly
- **TypeScript checking** - Real-time type errors
- **Fast Refresh** - Preserves React state during edits

### Environment Variables

Create `.env` file for environment-specific configuration:
```env
VITE_API_BASE_URL=http://localhost:8080/api
```

Then use in code:
```typescript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
```

---

## 🏗 Build & Deploy

### Production Build

```bash
npm run build
```

This creates optimized files in `dist/` folder:
- Minified JavaScript
- Optimized CSS
- Compressed assets

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing.

### Deployment Options

**Static Hosting:**
- Deploy `dist/` folder to:
  - Vercel
  - Netlify
  - GitHub Pages
  - AWS S3 + CloudFront
  - Firebase Hosting

**Example (Vercel):**
```bash
npm install -g vercel
vercel --prod
```

---

## 🎨 Styling Guide

### Tailwind CSS Classes Used

**Layout:**
- `container mx-auto` - Centered container
- `flex`, `grid` - Flexbox and grid layouts
- `min-h-screen` - Full viewport height

**Spacing:**
- `p-{size}` - Padding
- `m-{size}` - Margin
- `space-y-{size}` - Vertical spacing

**Colors:**
- `bg-gray-100` - Light gray background
- `bg-blue-600` - Blue background
- `text-white` - White text

**Effects:**
- `hover:bg-gray-100` - Hover effect
- `shadow-lg` - Box shadow
- `rounded-lg` - Rounded corners

---

## 🐛 Troubleshooting

### Common Issues

**1. Backend connection failed**
```
Error: Failed to fetch countries. Please ensure the backend is running...
```
**Solution:** Make sure backend is running on `http://localhost:8080`

**2. TypeScript errors**
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

**3. Port already in use**
```bash
# Vite will auto-increment port (5173 → 5174)
# Or kill process using port 5173
```

**4. Tailwind styles not working**
```bash
# Verify index.css has import
@import "tailwindcss";
```

---

## 📦 Dependencies

### Production Dependencies
```json
{
  "@tailwindcss/vite": "^4.1.16",
  "axios": "^1.13.1",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router-dom": "^7.9.4",
  "tailwindcss": "^4.1.16"
}
```

### Development Dependencies
```json
{
  "@types/react": "^19.1.16",
  "@types/react-dom": "^19.1.9",
  "@vitejs/plugin-react": "^5.0.4",
  "eslint": "^9.36.0",
  "typescript": "~5.9.3",
  "vite": "^7.1.7"
}
```

---

## 📄 License

This project is created for educational and assessment purposes for Sentura Technologies Internship (2026).

---

## 👨‍💻 Author

**Internship Candidate - Sentura Technologies (2026)**

---

## 🔗 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vite.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Axios Documentation](https://axios-http.com/docs/intro)

---

**Happy Coding! 🚀**
