import { Injectable } from '@angular/core';
import * as dataSet from '../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getFilteredDetails(paramData: any){
    return dataSet.data.filter(i => i.id === Number(paramData));
  }

}
