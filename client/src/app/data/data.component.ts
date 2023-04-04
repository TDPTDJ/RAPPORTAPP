import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
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
  public ob?: Observable<OutputBody>;
  
  constructor(private formbuild:FormBuilder, private ds: DataService,private router:Router){}

  inputForm = this.formbuild.group({
    iriziv_n : ['', [Validators.required, Validators.maxLength(9)]],
    iclass: ['', Validators.required],
    iprestdate: ['', Validators.required]
    });

  onSubmit(){
    console.log("Calling rest service with ", this.inputForm.value);
    this.ob = this.ds.getRapportFromDb2$(
      new InputBody(this.inputForm.value.iriziv_n!, 
                    new Date(this.inputForm.value.iprestdate!).toLocaleDateString('fr-CA').toString(), this.inputForm.value.iclass!)
      ).pipe(
        catchError((err) => {
          this.errorMessage = err;
          return EMPTY;
        })
      );

    this.router.navigateByUrl(`/data-detail?state=${JSON.stringify(this.ob)}`);
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

