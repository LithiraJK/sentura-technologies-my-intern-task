// Modal component to display full country details

import type { Country } from "../types/country";

interface CountryModalProps {
  country: Country | null;
  onClose: () => void;
}

/**
 * Modal popup that displays detailed information about a selected country
 * Shown when user clicks on a table row
 */
const CountryModal = ({ country, onClose }: CountryModalProps) => {
  // Don't render if no country is selected
  if (!country) return null;

  return (
    // Modal overlay - darkens the background
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* Modal content - stops click propagation to prevent closing when clicking inside */}
      <div
        className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full mx-4"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        {/* Close button */}
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-bold text-gray-800">{country.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Country details */}
        <div className="space-y-4">
          {/* Flag image */}
          <div className="flex justify-center mb-6">
            <img
              src={country.flag}
              alt={`Flag of ${country.name}`}
              className="w-64 h-auto shadow-lg rounded"
            />
          </div>

          {/* Information grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-sm text-gray-600 font-semibold">Capital</p>
              <p className="text-lg text-gray-900">{country.capital}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <p className="text-sm text-gray-600 font-semibold">Region</p>
              <p className="text-lg text-gray-900">{country.region}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded col-span-2">
              <p className="text-sm text-gray-600 font-semibold">Population</p>
              <p className="text-lg text-gray-900">
                {country.population.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Close button at bottom */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryModal;
