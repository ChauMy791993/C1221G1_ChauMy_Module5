import {Component, OnInit} from '@angular/core';
import {facilities} from '../data/facility';
import {FacilityService} from '../service/facility.service';
import {Facility} from '../model/facility';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilities: Facility [];

  constructor(private facilityService: FacilityService) {
    this.facilities = facilityService.getList();
  }

  ngOnInit(): void {
  }

}
