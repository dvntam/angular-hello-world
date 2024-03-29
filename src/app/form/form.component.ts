import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public name = '';
  public password = '';
  public vehicles= [ "Toyota", "Hyundai","Honda"];
  private selectedVehicle ='';

  constructor() {}

  ngOnInit(): void {}

  public onSubmit() {
    console.log('onSubmit');
    console.log('name = ' + this.name);
    console.log('password = ' + this.password);
    console.log("selectVehicle = " + this.selectedVehicle);
  }

  public selectVehicle(event:any) {
    // console.log('selectVehicle',event.target.value);
    this.selectedVehicle = event.target.value;
  }
}