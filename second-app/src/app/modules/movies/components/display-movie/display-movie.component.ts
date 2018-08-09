import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Movie } from '../../../../models/movie';

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.css']
})
export class DisplayMovieComponent implements OnInit {
  @Input() movie: Movie;
  @Output() movieDeleted: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit() {}
  // Add me!
  onClickDelete() {
    this.movieDeleted.emit(this.movie.id);
  }
}