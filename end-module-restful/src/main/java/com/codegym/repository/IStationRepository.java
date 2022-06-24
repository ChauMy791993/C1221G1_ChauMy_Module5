package com.codegym.repository;

import com.codegym.model.Station;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IStationRepository extends JpaRepository<Station, Integer> {
    List<Station> findAllByStatus(boolean status);

    List<Station> findAllByNameHouseCarContainingAndArriveLocation_IdAndStatus(String name, Integer id, boolean status);

    List<Station> findAllByNameHouseCarContainingAndStatus(String name, boolean status);
}
