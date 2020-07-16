import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { AppSubroute1Module} from './route1/app-subroute1.module';


const routes: Routes = [
    {
        path: 'route1',
        loadChildren: () => import('./route1/app-subroute1.module').then(m => m.AppSubroute1Module),
    },
    { path: 'route2', component: Route2Component },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
