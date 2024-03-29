import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public totalStudents = 0;
  public totalStudents$ = new BehaviorSubject<number>(0);
  public age=10;
  constructor() { }

  public tangtuoi() {
    this.age++
  }

  public setTotalStudents(total: number) {
    this.totalStudents = total;
    this.totalStudents$.next(total);
  }

  public increamentStudent() {
    this.totalStudents++;
    this.totalStudents$.next(this.totalStudents);
  }
}
