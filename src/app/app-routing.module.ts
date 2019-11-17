import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritesComponent } from './components/favorites/favorites.component';
import { MovieDetailsComponent } from './components/movie/movie-details/movie-details.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';


const routes: Routes = [
  {path:'auth/signin', component: SigninComponent},
  {path:'auth/signup', component: SignupComponent},
  {path:'home', component: HomeComponent},
  {path:'movie/:id', component: MovieDetailsComponent},
  {path:'favorite', component: FavoritesComponent},
  {path:'', pathMatch: 'full', component: HomeComponent},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
