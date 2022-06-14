import {Injectable} from '@angular/core';
import {Iword} from '../iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  wordList: Iword [];

  constructor() {
    this.wordList = [];
    this.wordList.push({id: 1, word: 'hello', mean: 'xin chào'});
    this.wordList.push({id: 2, word: 'ok', mean: 'được'});
    this.wordList.push({id: 3, word: 'mother', mean: 'mẹ'});
    this.wordList.push({id: 4, word: 'father', mean: 'cha'});
  }

  getAllList() {
    return this.wordList;
  }

  findById(id: number) {
    for (const item of this.wordList) {
      if (item.id === id) {
        return item;
      }
    }
  }

}
