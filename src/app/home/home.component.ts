import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { JsonService } from '../services/json.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cartelera: Movies[];

  jsonPath = 'assets/json/movies.json';

  constructor( private js: JsonService ) { }

  ngOnInit() {

    this.js.getJSON(this.jsonPath).subscribe(data => {
      this.cartelera = data;
      console.log(this.cartelera);
    });






  }

}
