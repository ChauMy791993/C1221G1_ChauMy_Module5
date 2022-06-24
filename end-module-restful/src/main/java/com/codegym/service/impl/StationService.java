package com.codegym.service.impl;

import com.codegym.model.Station;
import com.codegym.repository.IStationRepository;
import com.codegym.service.IStationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StationService implements IStationService {
    @Autowired
    private IStationRepository iStationRepository;

    @Override
    public List<Station> findAll() {
        return this.iStationRepository.findAllByStatus(true);
    }

    @Override
    public void save(Station station) {
        this.iStationRepository.save(station);
    }

    @Override
    public void update(Station station) {
        this.iStationRepository.save(station);
    }

    @Override
    public Station findById(Integer id) {
        return this.iStationRepository.findById(id).orElse(null);
    }

    @Override
    public void delete(Station station) {
        Station existStation = station;
        existStation.setStatus(false);
        this.iStationRepository.save(existStation);
    }

    @Override
    public List<Station> searchBy(String name, Integer id) {
        if (id == null) {
            return this.iStationRepository.findAllByNameHouseCarContainingAndStatus(name, true);
        } else {
            return this.iStationRepository.findAllByNameHouseCarContainingAndArriveLocation_IdAndStatus
                    (name, id, true);
        }
    }
}
