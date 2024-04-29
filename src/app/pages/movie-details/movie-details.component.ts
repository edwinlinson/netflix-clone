import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private service: MovieApiServiceService,private router:ActivatedRoute){

    
  }

  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;

  ngOnInit():void{
  let getParamId=this.router.snapshot.paramMap.get('id')
  this.getMovie(getParamId)
  this.getMovieCast(getParamId)
  this.getVideo(getParamId)
  }

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result)=>{
      console.log(result,'getmoviedetails#');
      this.getMovieDetailResult=result
    })
  }

  getVideo(id:any){
    this.service.getMovieVideo(id).subscribe((result)=>{
      result.results.forEach((element:any) => {
        if(element.type=="Trailer"){
          this.getMovieVideoResult=element.key
        }
        
      });
    })
    
  }

  getMovieCast(id:any){
    this.service.getMovieCast(id).subscribe((result)=>{
      this.getMovieCastResult = result.cast
    })

  }
}
