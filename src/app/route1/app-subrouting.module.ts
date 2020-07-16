import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Subroute1Component } from './subroute1/subroute1.component';
import { Subroute2Component } from './subroute2/subroute2.component';


const routes: Routes = [
    { path: 'subroute1', component: Subroute1Component },
    { path: 'subroute2', component: Subroute2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
