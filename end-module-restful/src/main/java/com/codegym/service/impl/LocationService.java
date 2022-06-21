package com.codegym.service.impl;

import com.codegym.model.Location;
import com.codegym.repository.ILocationRepository;
import com.codegym.service.ILocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class LocationService implements ILocationService {
    @Autowired
    private ILocationRepository iLocationRepository;

    @Override
    public List<Location> findAll() {
        return iLocationRepository.findAll();
    }
}
