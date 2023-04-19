import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core'
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DataDetailComponent{

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

  
  @ViewChild('pdfTable', { static: false }) public pdfTable!: ElementRef;
  
  downloadAsPdf(): void {
    var element = document.getElementById('pdfTable');

    var opt = {
        margin:      1,
        filename:    'rapport_etdb.pdf',
        image:       {type:'jpeg', quality: 0.98},
        html2canvas: {scale: 2},
        jsPDF:       {unit: 'in', format: 'letter', orientation: 'portrait'}
    }

    html2pdf().from(element).set(opt).save();
  }
}


