import { Component, OnInit, Input } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.scss']
})
export class PlantillaComponent implements OnInit {

@Input() item: Movies;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkMovieDetail(itemName: string){

    this.router.navigate(['/details'], {queryParams: { name: itemName}});

  }

}
