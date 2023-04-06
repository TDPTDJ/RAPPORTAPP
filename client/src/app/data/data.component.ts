import { ListKeyManager } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, ConnectableObservable, EMPTY } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from '../data-service.service';
import { InputBody } from '../inputbody.model';
import { OutputBody } from '../outputbody.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  providers: [DataService]
})
export class DataComponent {
  public errorMessage: string = '';
  public ob?: OutputBody;
  
  constructor(private formbuild:FormBuilder, private ds: DataService,private router:Router){}

  inputForm = this.formbuild.group({
    iriziv_n : ['', [Validators.required, Validators.maxLength(9)]],
    iclass: ['', Validators.required],
    iprestdate: ['', Validators.required]
    });

  onSubmit(){
    console.log("Calling rest service with ", this.inputForm.value);
    console.log("riziv nummer: " + this.inputForm.value.iriziv_n);
    console.log("prestatie datum: " + new Date(this.inputForm.value.iprestdate!).toLocaleDateString('fr-CA').toString());
    console.log("klasse: " + this.inputForm.value.iclass);

    
    this.ds.getRapportFromDb2$( new InputBody(Number(this.inputForm.value.iriziv_n!),  new Date(this.inputForm.value.iprestdate!).toLocaleDateString('fr-CA').toString(), this.inputForm.value.iclass!))
    .pipe(catchError((err) => {
          this.errorMessage = err;
          return EMPTY;
        }), 
      ).subscribe((res: any) => {
        console.log(res["Output Parameters"].return_code);
        console.log(res["Output Parameters"].sql_code);
        console.log(res["Output Parameters"].sm_body)

        /*this.router.navigateByUrl(`/data-detail?state=${JSON.stringify(new  OutputBody(res["Output Parameters"].return_code, res["Output Parameters"].sql_code, res["Output Parameters"].sm_body))}`);*/

        this.router.navigate(['data-detail'],{
          state: {sqlcode: res["Output Parameters"].sql_code, sm_body: res["Output Parameters"].sm_body}
        });
      });
  }

  getErrorMessage(errors: any): any {
    if (!errors) {
      return null;
    }
    if (errors.required) {
      return 'is required';
    } else if (errors.maxLength) {
      return `Can maximum have ${errors.maxLength.requiredLength} characters (got ${errors.maxLength.actualLength})`;
    }
  }
}

