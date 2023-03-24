import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit 
{
  // public name = new FormControl('');
  public profileform = new FormGroup  ({
    name : new FormControl('', [Validators.required]),
    age : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]), 

  });


  constructor(){}
  ngOnInit(): void {}
  public onSubmit() {
    console.log('onSubmit');
    console.log(this.profileform.value);
    // console.log(this.profileform);
    console.log('name = ' + this.profileform.controls.name.value);
    console.log('age = ' + this.profileform.controls.age.value);

  }
  
}
