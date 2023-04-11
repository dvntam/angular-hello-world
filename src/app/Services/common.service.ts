import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  setTotalStudents(length: any) {
    throw new Error('Method not implemented.');
  }
  public age=10;
  totalStudents$: any;
  totalStudents: any;
  constructor() { }

  public tangtuoi() {
    this.age++
  }
}
