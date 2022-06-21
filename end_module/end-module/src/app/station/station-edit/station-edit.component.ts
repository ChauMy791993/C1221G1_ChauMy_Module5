import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {StationService} from '../station.service';
import {LocationService} from '../location.service';
import {Location} from '../model/location';

@Component({
  selector: 'app-station-edit',
  templateUrl: './station-edit.component.html',
  styleUrls: ['./station-edit.component.css']
})
export class StationEditComponent implements OnInit {
  stationForm: FormGroup;
  locations: Location[] = [];
  stationId: number;
  submit = false;

  constructor(private stationService: StationService, private locationService: LocationService,
              private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.stationId = +paramMap.get('id');
      this.getStation(this.stationId);
    });
  }

  ngOnInit(): void {
    this.getLocationList();
  }

  getStation(id: number) {
    return this.stationService.findById(id).subscribe(station => {
      this.stationForm = new FormGroup({
        id: new FormControl(station.id),
        code: new FormControl(station.code),
        typeCar: new FormControl(station.typeCar, [Validators.required]),
        nameHouseCar: new FormControl(station.nameHouseCar, [Validators.required]),
        startLocation: new FormControl(station.startLocation, [Validators.required]),
        arriveLocation: new FormControl(station.arriveLocation, [Validators.required]),
        phone: new FormControl(station.phone, [Validators.required, Validators.pattern('^(093|090|097)\\d{7}$')]),
        email: new FormControl(station.email, [Validators.required, Validators.email]),
        timeStart: new FormControl(station.timeStart, [Validators.required, Validators.pattern('^\\d{2}:\\d{2}$')]),
        timeArrive: new FormControl(station.timeArrive, [Validators.required, Validators.pattern('^\\d{2}:\\d{2}$')]),
      });
    });
  }

  getLocationList() {
    this.locationService.getAll().subscribe(locations => {
      this.locations = locations;
    });
  }

  updateStation(stationId: number) {
    this.submit = true;
    if (this.stationForm.valid) {
      this.submit = false;
      const station = this.stationForm.value;
      this.stationService.updateStation(station).subscribe(() => {
        alert('Update Successfully');
        this.router.navigate(['/station/station-list']);
      });
    }
  }

  // validateDate(station: AbstractControl): ValidationErrors {
  //   const gioDi = station.get('gioDi').value;
  //   const gioDen = station.get('gioDen').value;
  //   if (gioDi !== '' && gioDen !== '') {
  //     // const endDateParse = new Date(endDate);
  //     if (startDateParse > endDateParse) {
  //       return {invalidDate: true};
  //     }
  //   }
  //   return null;
  // }

  compareFn(t1, t2): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }

}
