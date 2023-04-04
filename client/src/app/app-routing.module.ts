import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DataDetailComponent } from './data-detail/data-detail.component';
import { DataComponent } from './data/data.component';

const appRoutes: Routes = [
  /*{path: '', redirectTo: '/data', pathMatch: 'full'},*/
  {path: '', component: DataComponent},
  {path: 'data-detail', component: DataDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
