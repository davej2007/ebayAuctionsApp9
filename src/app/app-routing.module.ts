import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuctionInfoService } from './components/resolvers/auction-info.service';
import { AuctionTableComponent } from './components/pages/auctionTable/auctionTable.component';


const routes: Routes = [
  {path:'active', component:AuctionTableComponent, data: {status: [1, 0]}, resolve:{info:AuctionInfoService}},
  {path:'sold', component:AuctionTableComponent, data: {status: [2,3,4,5]}, resolve:{info:AuctionInfoService}}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
