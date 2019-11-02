import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'src/app/models/movies';
import { JsonService } from '../../services/json.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  @Input() item: Movies;
  cartelera: Movies[];
  pelicula: Movies;
  jsonPath = 'assets/json/movies.json';
 
  constructor(private js: JsonService, private ar: ActivatedRoute) { }

  ngOnInit() {

    this.js.getJSON(this.jsonPath).subscribe(data => {
      this.cartelera = data;
      console.log(this.cartelera);
      console.log(this.ar.snapshot.queryParams.name);

    });
}


}

