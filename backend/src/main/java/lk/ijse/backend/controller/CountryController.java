package lk.ijse.backend.controller;

import lk.ijse.backend.dto.APIResponse;
import lk.ijse.backend.dto.CountryDTO;
import lk.ijse.backend.service.CountryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/countries")
@CrossOrigin(origins = "*") // Allow React frontend access
@RequiredArgsConstructor
public class CountryController {

    private final CountryService countryService;

    @GetMapping
    public ResponseEntity<APIResponse<List<CountryDTO>>> getCountries(@RequestParam(required = false) String search) {
        // Get data from the cached service
        List<CountryDTO> countries = countryService.getAllCountries();

        // Filter logic if search term is provided
        if (search != null && !search.isEmpty()) {
            countries = countries.stream()
                    .filter(c -> c.getName().toLowerCase().contains(search.toLowerCase()))
                    .collect(Collectors.toList());
        }

        // Wrap results in a standard APIResponse
        APIResponse<List<CountryDTO>> response = new APIResponse<>(
                HttpStatus.OK.value(),
                "Countries fetched successfully",
                countries
        );

        return ResponseEntity.ok(response);
    }
}