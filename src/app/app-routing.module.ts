import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { DetallesComponent } from '../app/components/detalles/detalles.component';
import { BuyComponent } from './components/buy/buy.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'buy', component: BuyComponent},
  {path:'details', component: DetallesComponent, children: [
    {path: 'id', component: DetallesComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
