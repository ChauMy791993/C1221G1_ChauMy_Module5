package com.codegym.dto;

import com.codegym.model.Location;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class StationDto {
    private Integer id;
    private String code;
    private String typeCar;
    private String nameHouseCar;
    private Location startLocation;
    private Location arriveLocation;
    private String phone;
    private String email;
    private String timeStart;
    private String timeArrive;
    private boolean status;

    public StationDto() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getTypeCar() {
        return typeCar;
    }

    public void setTypeCar(String typeCar) {
        this.typeCar = typeCar;
    }

    public String getNameHouseCar() {
        return nameHouseCar;
    }

    public void setNameHouseCar(String nameHouseCar) {
        this.nameHouseCar = nameHouseCar;
    }

    public Location getStartLocation() {
        return startLocation;
    }

    public void setStartLocation(Location startLocation) {
        this.startLocation = startLocation;
    }

    public Location getArriveLocation() {
        return arriveLocation;
    }

    public void setArriveLocation(Location arriveLocation) {
        this.arriveLocation = arriveLocation;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTimeStart() {
        return timeStart;
    }

    public void setTimeStart(String timeStart) {
        this.timeStart = timeStart;
    }

    public String getTimeArrive() {
        return timeArrive;
    }

    public void setTimeArrive(String timeArrive) {
        this.timeArrive = timeArrive;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
