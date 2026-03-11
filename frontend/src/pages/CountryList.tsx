// Main page component for country listing application

import { useState, useEffect } from "react";
import { getAllCountries } from "../services/countryService";
import type { Country } from "../types/country";
import CountryTable from "../components/CountryTable";
import CountryModal from "../components/CountryModal";

/**
 * Main application page that displays all countries
 * Features: data fetching, search filtering, loading state, and detail modal
 */
const CountryList = () => {
  // State for storing all countries from the API
  const [countries, setCountries] = useState<Country[]>([]);
  
  // State for the search input value
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  // State for loading indicator
  const [loading, setLoading] = useState<boolean>(true);
  
  // State for error handling
  const [error, setError] = useState<string | null>(null);
  
  // State for the selected country (for modal display)
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  /**
   * Fetch countries from backend when component mounts
   * useEffect with empty dependency array [] runs only once
   */
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const data = await getAllCountries();
        setCountries(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch countries. Please ensure the backend is running on http://localhost:8080");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  /**
   * Filter countries based on search term
   * Filters by country name (case-insensitive)
   */
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /**
   * Handle when a table row is clicked
   * Opens the modal with the selected country's details
   */
  const handleRowClick = (country: Country) => {
    setSelectedCountry(country);
  };

  /**
   * Handle closing the modal
   */
  const handleCloseModal = () => {
    setSelectedCountry(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">World Countries Explorer</h1>
          <p className="text-blue-100 mt-2">
            Explore information about countries around the world
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search countries by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto"></div>
              <p className="text-gray-600 mt-4 text-lg">Loading countries...</p>
            </div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p className="font-bold">Error</p>
            <p>{error}</p>
          </div>
        )}

        {/* Country table - only show when not loading and no error */}
        {!loading && !error && (
          <>
            <div className="mb-4 text-gray-600">
              Showing {filteredCountries.length} of {countries.length} countries
            </div>
            <CountryTable
              countries={filteredCountries}
              onRowClick={handleRowClick}
            />
          </>
        )}
      </main>

      {/* Modal for country details */}
      <CountryModal country={selectedCountry} onClose={handleCloseModal} />
    </div>
  );
};

export default CountryList;
