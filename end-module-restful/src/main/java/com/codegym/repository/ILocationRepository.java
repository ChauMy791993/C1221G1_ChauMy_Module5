package com.codegym.repository;

import com.codegym.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ILocationRepository extends JpaRepository<Location, Integer> {
}
