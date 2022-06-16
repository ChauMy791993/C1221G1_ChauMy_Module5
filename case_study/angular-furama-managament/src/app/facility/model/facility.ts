import {RentType} from './rent-type';
import {FacilityType} from './facility-type';

export interface Facility {
  id: number;
  facilityCode?: string;
  facilityName: string;
  facilityImage?: number;
  facilityArea?: number;
  facilityCost?: number;
  facilityMaxPeople?: number;
  standardRoom?: string;
  descriptionOtherConvenience?: string;
  poolArea?: number;
  numberOfFloors?: number;
  facilityType?: FacilityType;
  rentType?: RentType;
}
