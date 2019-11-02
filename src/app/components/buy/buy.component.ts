import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/models/compra';
import { BuyService } from '../../services/buy.service';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

compra: Compra = {

  lastname: '',
  name:  '',
  pelicula: '',
  tickets: 0,
}

  constructor(private itemService: BuyService) { }

  ngOnInit() {
  }

  // onSubmit() {
  //   // tslint:disable-next-line: triple-equals
  //   // if(this.compra.lastname != '' && this.compra.name != '' && this.compra.pelicula != ''){
  //   //   this.itemService.add(this.compra);
  //   //   this.compra.lastname = '';
  //   //   this.compra.name = '';
  //   //   this.compra.pelicula = '';
  //   //   this.compra.tickets = 0;
  //   }
  }


