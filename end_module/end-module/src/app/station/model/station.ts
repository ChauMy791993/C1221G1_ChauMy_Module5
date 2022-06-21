import {Location} from './location';

export interface Station {
  id: number;
  code: string;
  typeCar: string;
  nameHouseCar: string;
  startLocation: Location;
  arriveLocation: Location;
  phone: string;
  email: string;
  timeStart: string;
  timeArrive: string;
  status?: boolean;
}
