package lk.ijse.backend.service;

import lk.ijse.backend.dto.CountryDTO;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import jakarta.annotation.PostConstruct;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CountryService {

    private final RestTemplate restTemplate;
    private final ModelMapper modelMapper; // Injected via @RequiredArgsConstructor

    private List<CountryDTO> countryCache = new ArrayList<>();
    private final String API_URL = "https://restcountries.com/v3.1/all";

    @PostConstruct
    public void init() {
        fetchCountries();
    }

    @Scheduled(fixedRate = 600000)
    public void fetchCountries() {
        try {
            Object[] response = restTemplate.getForObject(API_URL, Object[].class);
            if (response != null) {
                this.countryCache = Arrays.stream(response)
                        .map(this::convertToDto)
                        .collect(Collectors.toList());
            }
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
        }
    }

    public List<CountryDTO> getAllCountries() {
        return countryCache;
    }

    private CountryDTO convertToDto(Object obj) {
        Map<String, Object> map = (Map<String, Object>) obj;

        // Manual extraction for nested fields not matching DTO structure
        CountryDTO dto = modelMapper.map(map, CountryDTO.class);

        // Handling nested fields from the API
        Map<String, Object> nameObj = (Map<String, Object>) map.get("name");
        dto.setName((String) nameObj.get("common"));

        List<String> capitals = (List<String>) map.get("capital");
        dto.setCapital(capitals != null && !capitals.isEmpty() ? capitals.get(0) : "N/A");

        Map<String, Object> flags = (Map<String, Object>) map.get("flags");
        dto.setFlag((String) flags.get("png"));

        return dto;
    }
}