import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TransactionService} from '../../transaction/transaction.service';
import {CustomerService} from '../../transaction/customer.service';
import {Router} from '@angular/router';
import {Location} from '../model/location';
import {StationService} from '../station.service';
import {LocationService} from '../location.service';

@Component({
  selector: 'app-station-create',
  templateUrl: './station-create.component.html',
  styleUrls: ['./station-create.component.css']
})
export class StationCreateComponent implements OnInit {
  stationForm: FormGroup;
  locations: Location[] = [];

  constructor(private stationService: StationService, private locationService: LocationService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.getLocationList();
    this.stationForm = new FormGroup({
      code: new FormControl(''),
      typeCar: new FormControl('', [Validators.required]),
      nameHouseCar: new FormControl('', [Validators.required]),
      startLocation: new FormControl(null, [Validators.required]),
      arriveLocation: new FormControl(null, [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(093|090|097)\\d{7}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      timeStart: new FormControl('', [Validators.required, Validators.pattern('^\\d{2}:\\d{2}$')]),
      timeArrive: new FormControl('', [Validators.required, Validators.pattern('^\\d{2}:\\d{2}$')]),
    });
  }

  getLocationList() {
    this.locationService.getAll().subscribe(locations => {
      this.locations = locations;
    });
  }

  createStation() {
    if (this.stationForm.valid) {
      const station = this.stationForm.value;
      this.stationService.saveStation(station).subscribe(() => {
        alert('Create Successfully');
        this.router.navigate(['/station/station-list']);
      }, e => {
        console.log(e);
      });
    }
  }

}
