import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieInfo: any = {};

  constructor(
    private movieThang: MoviesService,
    private activatedThang: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedThang.params.subscribe(
      (myParams) => {
        const theId = Number(myParams.id);
        this.movieInfo = this.movieThang.getMovieDetails(theId);
      }
    )
  }


}
