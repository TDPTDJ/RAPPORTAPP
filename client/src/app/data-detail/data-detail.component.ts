import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';
import { OutputBody } from '../outputbody.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DataDetailComponent implements OnInit{

  public sm_body? : string;
  public sqlcode? : number;
  public return_code?: string;
  public errorMsg: string = '';
  
  
  constructor(private router: Router){
    this.sm_body     = this.router.getCurrentNavigation()?.extras.state?.["sm_body"];
    this.sqlcode     = this.router.getCurrentNavigation()?.extras.state?.["sqlcode"];
    this.return_code = this.router.getCurrentNavigation()?.extras.state?.["return_code"];

    switch(this.return_code){
      case '09001': {
        this.errorMsg = "DB2 problem, sqlcode: " + this.sqlcode?.toString;
        break;
      }
      case '01004': {
        this.errorMsg = "RIZIV/INAMI number does not exist for given combination, try again.";
        break;
      }
      case '09002': {
        this.errorMsg = "No result."
        break;
      }
      default: {
        break;
      }
    }

  }

  ngOnInit() {

  }
}
