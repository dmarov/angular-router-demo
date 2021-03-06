import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Subroute1Component } from './subroute1/subroute1.component';
import { Subroute2Component } from './subroute2/subroute2.component';
import { Route1Component } from './route1.component';


const routes: Routes = [
    {
      path: '',
      component: Route1Component,
      children: [
        { path: '', pathMatch: 'full', redirectTo: 'subroute1' },
        { path: 'subroute1', component: Subroute1Component,
        data: {
            breadcrumb: 'subRoute 1',
        },
        },
        { path: 'subroute2', component: Subroute2Component,
        data: {
            breadcrumb: 'subRoute 2',
        },
        },
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
