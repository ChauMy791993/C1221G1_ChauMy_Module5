import { Component, OnInit } from '@angular/core';
import {Station} from '../model/station';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {StationService} from '../station.service';

@Component({
  selector: 'app-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.css']
})
export class StationDetailComponent implements OnInit {
  detailStation: Station;

  constructor(private stationService: StationService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      if (id != null) {
        this.stationService.findById(Number(id)).subscribe(station => {
          this.detailStation = station;
        });
      }
    });
  }

  ngOnInit(): void {
  }

}
