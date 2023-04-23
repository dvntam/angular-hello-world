import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent  implements OnInit{
 
  public profileform = new FormGroup  ({
    name : new FormControl(''),
    age : new FormControl(''),
  });
  constructor(){}
  ngOnInit(): void {
  }
  public onSubmit() {
    console.log('onSubmit');
    console.log(this.profileform.value);
    // console.log(this.profileform);
    console.log('name = ' + this.profileform.controls.name.value);
    console.log('age = ' + this.profileform.controls.age.value);
}
}
