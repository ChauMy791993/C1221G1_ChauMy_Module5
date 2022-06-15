import { Component, OnInit } from '@angular/core';
import {Facility} from '../model/facility';
import {FacilityService} from '../facility.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Facility [];
  p = 1;
  nameToDelete: string;
  idToDelete: number;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.facilities = this.facilityService.getListFacility();
  }

  deleteModal(name: string, id: number) {
    this.nameToDelete = name;
    this.idToDelete = id;
  }

  deleteFacility() {
    this.facilityService.deleteFacility(this.idToDelete);
    this.ngOnInit();
  }

}
