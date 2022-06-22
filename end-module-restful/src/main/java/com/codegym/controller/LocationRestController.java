package com.codegym.controller;

import com.codegym.model.Location;
import com.codegym.service.ILocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin()
@RestController
@RequestMapping("locationRest")
public class LocationRestController {
    @Autowired
    private ILocationService iLocationService;

    @GetMapping("")
    public ResponseEntity<List<Location>> getAll() {
        List<Location> locations = this.iLocationService.findAll();
        if (locations.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(locations, HttpStatus.OK);
    }
}
