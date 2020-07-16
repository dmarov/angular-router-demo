import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { AppSubroute1Module} from './route1/app-subroute1.module';


const routes: Routes = [
    { path: 'route1', component: Route1Component },
    { path: 'route2', component: Route2Component },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      AppSubroute1Module,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
