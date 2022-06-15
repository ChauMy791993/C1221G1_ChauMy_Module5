import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../customer/model/customer-type';
import {FacilityType} from '../model/facility-type';
import {RentType} from '../model/rent-type';
import {FacilityService} from '../facility.service';
import {FacilityTypeService} from '../facility-type.service';
import {RentTypeService} from '../rent-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facilityForm: FormGroup;
  facilityTypes: FacilityType[] = [];
  rentTypes: RentType[] = [];
  facilityId: number;

  constructor(private facilityService: FacilityService, private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService, private activatedRouter: ActivatedRoute, private route: Router) {
    this.activatedRouter.paramMap.subscribe((param: ParamMap) => {
      this.facilityId = +param.get('id');
      const facility = this.facilityService.findById(this.facilityId);
      this.facilityTypes = this.facilityTypeService.getAllFacilityType();
      this.rentTypes = this.rentTypeService.getAllRentType();
      this.facilityForm = new FormGroup({
        facilityCode: new FormControl(facility.facilityCode, [Validators.required, Validators.pattern('^DV-\\d{4}$')]),
        facilityName: new FormControl(facility.facilityName, [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
        facilityArea: new FormControl(facility.facilityArea, [Validators.required]),
        facilityCost: new FormControl(facility.facilityCost, [Validators.required]),
        facilityMaxPeople: new FormControl(facility.facilityMaxPeople, [Validators.required]),
        standardRoom: new FormControl(facility.standardRoom, [Validators.required]),
        descriptionOtherConvenience: new FormControl(facility.descriptionOtherConvenience),
        poolArea: new FormControl(facility.poolArea, [Validators.pattern('^[+]?(\\d*\\.)?\\d+$')]),
        numberOfFloors: new FormControl(facility.numberOfFloors, [Validators.pattern('^[+]?\\d+$')]),
        facilityType: new FormControl(facility.facilityType, [Validators.required]),
        rentType: new FormControl(facility.rentType, [Validators.required]),
      });
    });
  }

  ngOnInit(): void {
  }
  updateFacility(facilityId: number) {
    if (this.facilityForm.valid) {
      this.facilityService.updateFacility(facilityId, this.facilityForm.value);
      this.route.navigate(['/facility/facility-list']);
    }
  }

  compareFn(t1, t2): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }
}
