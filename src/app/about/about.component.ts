import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  constructor(private commom: CommonService) {
    this.age= commom.age
  }
  ngOnInit(): void {
  }
 
public age;

public tangtuoi() {
    this.commom.age++;
    this.age= this.commom.age;
}

}
