import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../facility.service';
import {Router} from '@angular/router';
import {FacilityType} from '../model/facility-type';
import {RentType} from '../model/rent-type';
import {FacilityTypeService} from '../facility-type.service';
import {RentTypeService} from '../rent-type.service';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityForm: FormGroup;
  facilityTypes: FacilityType[] = [];
  rentTypes: RentType[] = [];

  constructor(private facilityService: FacilityService, private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService, private router: Router) {
  }

  ngOnInit(): void {
    this.facilityTypes = this.facilityTypeService.getAllFacilityType();
    this.rentTypes = this.rentTypeService.getAllRentType();
    this.facilityForm = new FormGroup({
      facilityCode: new FormControl('', [Validators.required, Validators.pattern('^DV-\\d{4}$')]),
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
      this.facilityService.saveFacility(this.facilityForm.value);
      this.router.navigate(['/facility/facility-list']);
    }
  }
}
