// Responsive table component to display all countries

import type { Country } from "../types/country";

interface CountryTableProps {
  countries: Country[];
  onRowClick: (country: Country) => void;
}

/**
 * Table displaying all countries with their basic information
 * Clicking on a row will open the details modal
 */
const CountryTable = ({ countries, onRowClick }: CountryTableProps) => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full bg-white">
        {/* Table header */}
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 px-6 text-left">Flag</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Capital</th>
            <th className="py-3 px-6 text-left">Region</th>
            <th className="py-3 px-6 text-left">Population</th>
          </tr>
        </thead>

        {/* Table body */}
        <tbody className="text-gray-700">
          {countries.length === 0 ? (
            // Show message when no countries match the search
            <tr>
              <td colSpan={5} className="text-center py-8 text-gray-500">
                No countries found
              </td>
            </tr>
          ) : (
            // Display each country as a table row
            countries.map((country, index) => (
              <tr
                key={index}
                onClick={() => onRowClick(country)}
                className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer transition-colors"
              >
                {/* Flag cell */}
                <td className="py-3 px-6">
                  <img
                    src={country.flag}
                    alt={`Flag of ${country.name}`}
                    className="w-12 h-8 object-cover shadow"
                  />
                </td>

                {/* Name cell */}
                <td className="py-3 px-6 font-medium">{country.name}</td>

                {/* Capital cell */}
                <td className="py-3 px-6">{country.capital}</td>

                {/* Region cell */}
                <td className="py-3 px-6">{country.region}</td>

                {/* Population cell - formatted with commas */}
                <td className="py-3 px-6">
                  {country.population.toLocaleString()}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CountryTable;
