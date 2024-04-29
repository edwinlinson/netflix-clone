import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { UrlTree } from '@angular/router';
import { ConfigService } from './config.service';



@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  baseurl= `${this.configService.baseurl}`;
  apikey = `${this.configService.apikey}`


  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }
  // bannerApiData(): Promise<any> {
  //   return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  // }

    trendingMovieApiData(): Observable<any>{
      return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
    }

// searchmovive
getSearchMovie(data: any): Observable<any> {

  return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
}

//getmoviedetails
getMovieDetails(data:any):Observable<any>{
  return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
}
//getmovieVideo
getMovieVideo(data:any):Observable<any>{
  return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
}
//getmovieCast
getMovieCast(data:any):Observable<any>{
  return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
}

fetchActionMovies():Observable<any>{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`)
}

 // adventure
 fetchAdventureMovies(): Observable<any> {
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
}

// animation
fetchAnimationMovies(): Observable<any> {
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
}

// comedy
fetchComedyMovies(): Observable<any> {
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
}

// documentary
fetchDocumentaryMovies(): Observable<any> {
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
}

// science-fiction:878

fetchScienceFictionMovies(): Observable<any> {
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
}

// thriller:53
fetchThrillerMovies(): Observable<any> {
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
}
  
}
