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
    public ResponseEntity<Void> createStation (@RequestBody Station station){
        iStationService.save(station);
        return new ResponseEntity<>(HttpStatus.CREATED);
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
    public ResponseEntity<Void> updateStation (@RequestBody Station station){
        iStationService.save(station);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteStation(@PathVariable Integer id){
        Station station = iStationService.findById(id);
        if (station == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        iStationService.delete(station);
        return new ResponseEntity<>(HttpStatus.OK);
    }



//    @GetMapping("/searchingStatione")
//    public ResponseEntity<List<Station>> getVehicleList(@RequestParam Optional<String> vehicleName,
//                                                        @RequestParam Optional<String> vehicleTypeId) {
//        String name = vehicleName.orElse("");
//        String id = vehicleTypeId.orElse("%");
//        List<Vehicle> vehicleSearchedList = this.vehicleService.searchBy(name,id);
//        if (vehicleSearchedList.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        } else {
//            return new ResponseEntity<>(vehicleSearchedList, HttpStatus.OK);
//        }
//    }


}
