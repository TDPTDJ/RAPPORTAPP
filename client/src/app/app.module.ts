import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { DataComponent } from './data/data.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { NativeDateAdapter, DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
