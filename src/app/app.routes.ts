import {NodeTypeComponent} from './node-type/node-type.component';
import {Routes} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";


export const appRoutes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'nodetype/:id', component: NodeTypeComponent}
];
