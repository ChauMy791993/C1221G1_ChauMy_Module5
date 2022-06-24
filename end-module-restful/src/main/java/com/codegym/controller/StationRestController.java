package com.codegym.controller;


import com.codegym.dto.StationDto;
import com.codegym.model.Station;
import com.codegym.service.IStationService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/stationRest")
public class StationRestController {
    @Autowired
    private IStationService iStationService;

    @GetMapping("/listStation")
    public ResponseEntity<List<Station>> getStationList() {
        List<Station> stationList = this.iStationService.findAll();
        if (stationList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(stationList, HttpStatus.OK);
        }
    }


    @PostMapping("/create")
    public ResponseEntity<Void> createStation(@RequestBody StationDto stationDto) {
        Station station = new Station();
        BeanUtils.copyProperties(stationDto, station);
        iStationService.save(station);
        System.out.println(station.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/station/{id}")
    public ResponseEntity<Station> getStationById(@PathVariable Integer id) {
        Station station = this.iStationService.findById(id);
        if (station == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(station, HttpStatus.OK);
    }


    @PatchMapping("/edit/{id}")
    public ResponseEntity<Void> updateStation(@RequestBody Station station) {
        iStationService.save(station);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteStation(@PathVariable Integer id) {
        Station station = iStationService.findById(id);
        if (station == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        iStationService.delete(station);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @GetMapping("/search")
    public ResponseEntity<List<Station>> searchStation(@RequestParam Optional<String> nameHouseCar,
                                                       @RequestParam Optional<Integer> arriveLocation) {
        String name = nameHouseCar.orElse("");
        Integer id = arriveLocation.orElse(null);
        List<Station> stationSearchList = this.iStationService.searchBy(name, id);
        System.out.println(stationSearchList);
        return new ResponseEntity<>(stationSearchList, HttpStatus.OK);
    }


}
