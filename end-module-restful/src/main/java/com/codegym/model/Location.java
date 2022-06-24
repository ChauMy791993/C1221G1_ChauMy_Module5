package com.codegym.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "location")
@JsonIgnoreProperties({"startLocationList","arriveLocationList"})
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @OneToMany(mappedBy = "startLocation")
    private List<Station> startLocationList;

    @OneToMany(mappedBy = "arriveLocation")
    private List<Station> arriveLocationList;

    public Location() {
    }

    public Location(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Station> getStartLocationList() {
        return startLocationList;
    }

    public void setStartLocationList(List<Station> startLocationList) {
        this.startLocationList = startLocationList;
    }

    public List<Station> getArriveLocationList() {
        return arriveLocationList;
    }

    public void setArriveLocationList(List<Station> arriveLocationList) {
        this.arriveLocationList = arriveLocationList;
    }
}
