import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ConfessComponent } from './confess/confess.component';
import { ExploreComponent } from './explore/explore.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgetComponent } from './forget/forget.component';

const routes: Routes = [
  {path:'home', component:HomeComponent
},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'confess', component:ConfessComponent},
  {path:'explore', component:ExploreComponent},
  {path:'forget', component:ForgetComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
