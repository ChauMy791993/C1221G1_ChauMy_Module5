import {Component, OnInit} from '@angular/core';
import {Iword} from '../iword';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  detailWord: Iword;

  constructor(private dictionaryService: DictionaryService, activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      if (id != null) {
        // tslint:disable-next-line:radix
        this.detailWord = this.dictionaryService.findById(parseInt(id));
      }
    });
  }

  ngOnInit() {
  }
}
