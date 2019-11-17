import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiMovieService {

  private KeyApi: string = "2fae416c150ee4b2e2c62a138bf9b3ea";
  private urlApi: string = "https://api.themoviedb.org/3";

  constructor(private httpClient: HttpClient) { }

  private getQuery(query: string) {
    const url = `${this.urlApi}${query}&language=fr&callback=JSONP_CALLBACK`;

    return this.httpClient.jsonp(url, "");
  }

  public getMoviesPlayingNow(): Observable<any> {
    return this.getQuery(`/movie/now_playing?api_key=${this.KeyApi}`).pipe(
      map((data: any) => data.results )
    )
  }

  public getMoviesTrending(): Observable<any> {
    return this.getQuery(`/trending/movie/day?api_key=${this.KeyApi}`).pipe(
      map((data: any) => data.results )
    )
  }

  public getMoviesMarvel(): Observable<any> {
    return this.getQuery(`/movie/popular?api_key=${this.KeyApi}&with_companies=420`).pipe(
      map((data: any) => data.results )
    )
  }

  public getMoviesDC(): Observable<any> {
    return this.getQuery(`/movie/popular?api_key=${this.KeyApi}&with_companies=9993`).pipe(
      map((data: any) => data.results )
    )
  }

}
