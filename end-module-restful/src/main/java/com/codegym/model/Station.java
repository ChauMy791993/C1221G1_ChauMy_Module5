package com.codegym.model;


import javax.persistence.*;

@Entity
public class Station {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String code;
    private String typeCar;
    private String nameHouseCar;
    @ManyToOne
    @JoinColumn(name = "start_location", referencedColumnName = "id")
    private Location startLocation;
    @ManyToOne
    @JoinColumn(name = "arrive_location", referencedColumnName = "id")
    private Location arriveLocation;

    private String phone;
    private String email;
    @Column(columnDefinition = "TIME")
    private String timeStart;
    @Column(columnDefinition = "TIME")
    private String timeArrive;
    private boolean status;


    public Station() {
    }

    public Station(Integer id, String code, String typeCar, String nameHouseCar, Location startLocation, Location arriveLocation, String phone, String email, String timeStart, String timeArrive, boolean status) {
        this.id = id;
        this.code = code;
        this.typeCar = typeCar;
        this.nameHouseCar = nameHouseCar;
        this.startLocation = startLocation;
        this.arriveLocation = arriveLocation;
        this.phone = phone;
        this.email = email;
        this.timeStart = timeStart;
        this.timeArrive = timeArrive;
        this.status = status;
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
