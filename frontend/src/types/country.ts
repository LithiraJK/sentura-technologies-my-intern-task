// TypeScript interfaces for Country data and API responses

/**
 * Represents a country with its basic information
 */
export interface Country {
  name: string;
  capital: string;
  region: string;
  population: number;
  flag: string; // URL to the flag image
}

/**
 * Standard API response wrapper from Spring Boot backend
 * The backend wraps all responses in this structure
 */
export interface APIResponse<T> {
  status: number;
  message: string;
  data: T;
}
