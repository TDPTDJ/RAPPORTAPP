import { ListKeyManager } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  constructor(private formbuild:FormBuilder){}

  inputForm = this.formbuild.group({
    iriziv_n : ['', Validators.required],
    iclass: ['', Validators.required],
    iprestdate: ['', Validators.required]
    });

  saveForm(){
    let oDate : Date;
    console.log('Form data is ', this.inputForm.value);
    oDate = new Date(this.inputForm.value.iprestdate!);
    console.log(oDate.toLocaleDateString('fr-CA'));
    
  }

}

