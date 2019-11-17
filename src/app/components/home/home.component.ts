import { ApiMovieService } from './../../services/api-movie.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public moviesNow: any;
  public moviesTrending: any;
  public moviesMarvel: any;
  public moviesDC: any;

  // private moviesNowSubscription: Subscription;
  // private moviesTrendingSubscription: Subscription;
  // private moviesMarvelSubscription: Subscription;
  // private moviesDCSubscription: Subscription;

  constructor(private apiMovie: ApiMovieService ) { }

  ngOnInit(): void {
    if(!this.moviesNow && !this.moviesTrending && !this.moviesMarvel && !this.moviesDC) {
      this.getMoviesNow();
      this.getMoviesTrending();
      this.getMoviesMarvel();
      this.getMoviesDC();
    }
  }

  private getMoviesNow(): void {
    this.apiMovie.getMoviesPlayingNow().subscribe(
      datas => {
        this.moviesNow = datas;
      },
      error => console.log(error)
    )
  }

  private getMoviesTrending(): void {
    this.apiMovie.getMoviesTrending().subscribe(
      datas => {
        this.moviesTrending = datas;
      },
      error => console.log(error)
    )
  }

  private getMoviesMarvel(): void {
    this.apiMovie.getMoviesMarvel().subscribe(
      datas => {
        this.moviesMarvel = datas
      },
      error => console.log(error)
    )
  }

  private getMoviesDC(): void {
    this.apiMovie.getMoviesDC().subscribe(
      datas => {
        this.moviesDC = datas
      },
      error => console.log(error)
    )
  }

  ngOnDestroy(): void {
  }


}


  // slides = [
  //   {poster_path: "../assets/images/avengers.jpg"},
  //   {poster_path: "../assets/images/joker.jpg"},
  //   {poster_path: "../assets/images/deadpool2.jpg"},
  //   {poster_path: "../assets/images/onepiece.jpg"},
  //   {poster_path: "../assets/images/onceupon.jpg"},
  //   {poster_path: "../assets/images/badboys.jpg"},
  //   {poster_path: "../assets/images/johnwick.jpg"},
  //   {poster_path: "../assets/images/pikachu.jpg"}
  // ];

  // sedils = [
  //   {poster_path: "../assets/images/pikachu.jpg"},
  //   {poster_path: "../assets/images/johnwick.jpg"},
  //   {poster_path: "../assets/images/badboys.jpg"},
  //   {poster_path: "../assets/images/onceupon.jpg"},
  //   {poster_path: "../assets/images/onepiece.jpg"},
  //   {poster_path: "../assets/images/deadpool2.jpg"},
  //   {poster_path: "../assets/images/joker.jpg"},
  //   {poster_path: "../assets/images/avengers.jpg"},
  // ];
