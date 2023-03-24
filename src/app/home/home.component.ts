import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  public name = "Tâm";
  public age = 20;
  public vehicles= [ "Toyota", "Hyundai","Honda"]
  // public xemoi: Vehicle = new Vehicle('', 0);
  // public vehicles:  Vehicle[] = [
  //   {name: "Hyundai", price: 8000}
  // , {name: "Toyota", price: 9000}
  // , {name: "Honda", price: 10000}
// ];
  
  constructor( private common: CommonService){ 
    this.age = common.age;
  }
  ngOnInit(): void {
      
  }
  public tangtuoi (){
    this.common.age++;
    this.age = this.common.age;
    // if (this.age === 21){
    //   this.name = "Ngân Tâm";
    // }
  }
  public themxe (){
    this.vehicles.push(this.name + ":"+ this.age);

  }





  // themXe() {
  //   this.vehicles.push(this.xemoi);
  //   this.xemoi = new vehicles('');
  // }

// }

// export class Vehicle {
//   constructor(name: string, price?: number) {
//     this.name = name;
//     this.price = price;
    
//   }
//   public name: string;
//   public price?: number

}
