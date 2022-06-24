import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Station} from '../model/station';
import {StationService} from '../station.service';
import {Location} from '../model/location';
import {LocationService} from '../location.service';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {

  stations: Station[];
  locations: Location[];
  p = 1;
  nameToDelete: string;
  idToDelete: number;
  @ViewChild('nameHouseCar') nameHouseCar: ElementRef;
  @ViewChild('arriveLocation') arriveLocation: ElementRef;

  constructor(private stationService: StationService, private locationService: LocationService) {
  }

  ngOnInit(): void {
    // this.getAll();
    this.getAllLocation();
    this.stationService.search('', '').subscribe(stations => {
      this.stations = stations;
      console.log(stations);
    });
  }

  getAll() {
    this.stationService.getAll().subscribe(stations => {
      this.stations = stations;
    });
  }

  getAllLocation() {
    this.locationService.getAll().subscribe(locations => {
      this.locations = locations;
    });
  }

  deleteModal(name: string, id: number) {
    this.nameToDelete = name;
    this.idToDelete = id;
  }

  deleteTransaction() {
    this.stationService.deleteStation(this.idToDelete).subscribe(() => {
        this.stationService.deleteStation(this.idToDelete);
        this.ngOnInit();
      }
    );
  }

  search() {
    this.stationService.search(this.nameHouseCar.nativeElement.value, this.arriveLocation.nativeElement.value).subscribe(stations => {
      this.stations = stations;
    });
  }
}
