import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {EditComponent} from './components/edit/edit.component';
import {NewComponent} from './components/new/new.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'edit', component:EditComponent},
  {path:'new', component:NewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [LoginComponent,DashboardComponent,EditComponent,NewComponent]