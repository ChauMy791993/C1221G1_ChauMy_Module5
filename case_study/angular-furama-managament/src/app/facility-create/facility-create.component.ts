import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../service/facility.service';
import {facilityTypes} from '../data/facility-type';
import {rentTypes} from '../data/rent-type';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityForm: FormGroup;
  facilityTypes = facilityTypes;
  rentTypes = rentTypes;

  constructor(private facilityService: FacilityService, private router: Router) {
  }

  ngOnInit(): void {
    this.facilityForm = new FormGroup({
      facilityCode: new FormControl('', [Validators.required]),
      facilityName: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
      facilityArea: new FormControl('', [Validators.required]),
      facilityCost: new FormControl('', [Validators.required]),
      facilityMaxPeople: new FormControl('', [Validators.required]),
      standardRoom: new FormControl('', [Validators.required]),
      descriptionOtherConvenience: new FormControl(),
      poolArea: new FormControl('', [Validators.pattern('^[+]?(\\d*\\.)?\\d+$')]),
      numberOfFloors: new FormControl('', [Validators.pattern('^[+]?\\d+$')]),
      facilityType: new FormControl('', [Validators.required]),
      rentType: new FormControl('', [Validators.required]),
    });
  }

  createFacility() {
    if (this.facilityForm.valid) {
      this.facilityService.save(this.facilityForm.value);
      this.router.navigate(['/facility']);
    }
  }
}
