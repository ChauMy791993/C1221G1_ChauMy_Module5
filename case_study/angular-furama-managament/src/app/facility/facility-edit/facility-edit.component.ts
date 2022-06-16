import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
  submit = false;

  constructor(private facilityService: FacilityService, private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService, private activatedRouter: ActivatedRoute, private route: Router) {
    this.activatedRouter.paramMap.subscribe((param: ParamMap) => {
      this.facilityId = +param.get('id');
      this.getFacility(this.facilityId);
    });
  }

  ngOnInit(): void {
    this.getFacilityTypeList();
    this.getRentTypeList();
  }

  getFacility(id: number) {
    return this.facilityService.findById(id).subscribe(facility => {
      this.facilityForm = new FormGroup({
        facilityCode: new FormControl(facility.facilityCode, [Validators.required, Validators.pattern('^DV-\\d{4}$')]),
        facilityName: new FormControl(facility.facilityName, [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
        facilityImage: new FormControl(facility.facilityImage, [Validators.required]),
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

  getFacilityTypeList() {
    this.facilityTypeService.getAll().subscribe(facilityTypes => {
      this.facilityTypes = facilityTypes;
    });
  }

  getRentTypeList() {
    this.rentTypeService.getAll().subscribe(rentTypes => {
      this.rentTypes = rentTypes;
    });
  }


  updateFacility(facilityId: number) {
    this.submit = true;
    if (this.facilityForm.valid) {
      this.submit = false;
      const facility = this.facilityForm.value;
      this.facilityService.updateFacility(facility).subscribe(() => {
        alert('Update Successfully');
        this.route.navigate(['/facility/facility-list']);
      });
    }
  }

  compareFn(t1, t2): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }
}
