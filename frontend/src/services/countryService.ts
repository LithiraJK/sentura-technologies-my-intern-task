// Service for fetching country data from the Spring Boot backend

import axios from "axios";
import type { Country, APIResponse } from "../types/country";

// Backend API base URL
const API_BASE_URL = "http://localhost:8080/api";

/**
 * Fetches all countries from the backend
 * The backend fetches and caches data from restcountries.com
 * @returns Promise with array of countries
 */
export const getAllCountries = async (): Promise<Country[]> => {
  try {
    const response = await axios.get<APIResponse<Country[]>>(
      `${API_BASE_URL}/countries`
    );
    
    // Extract the data from the APIResponse wrapper
    return response.data.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};
