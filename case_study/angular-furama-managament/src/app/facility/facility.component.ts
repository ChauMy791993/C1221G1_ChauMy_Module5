import {Component, OnInit} from '@angular/core';
import {facilities} from '../data/facility';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilities = facilities;

  constructor() {
  }

  ngOnInit(): void {
  }

}
