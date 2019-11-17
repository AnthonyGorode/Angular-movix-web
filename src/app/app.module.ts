import { FavoritesComponent } from './components/favorites/favorites.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie/movie-details/movie-details.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';

import { AuthGuardService } from './services/auth-guard.service';
import { MovieService } from './services/movie.service';
import { AuthService } from './services/auth.service';
import { ApiMovieService } from './services/api-movie.service';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    MovieDetailsComponent,
    HeaderComponent,
    FavoritesComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    SlickCarouselModule
  ],
  providers: [
    AuthService,
    MovieService,
    AuthGuardService,
    ApiMovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
