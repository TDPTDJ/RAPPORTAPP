import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';
import { OutputBody } from '../outputbody.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.css']
})
export class DataDetailComponent implements OnInit{

  public ob? : OutputBody;
  
  constructor(private route: ActivatedRoute, private ds : DataService){}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.ob = JSON.parse(params['state']);
    })
  }

}
