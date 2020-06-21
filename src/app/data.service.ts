import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = [
    'data1',
    'data2',
    'data3',
    'data4',
  ]
  constructor() { }
  voir(data:any) {
    console.log(this.data);
    console.log(data);
  }
  addData(data:any) {
    this.data.push(data);
  }
}
