package com.codegym.service;

import com.codegym.model.Station;

import java.util.List;

public interface IStationService {
    List<Station> findAll();

    void save(Station station);

    void update(Station station);

    Station findById(Integer id);

    void delete(Station station);

    List<Station> searchBy(String name, String id);
}
