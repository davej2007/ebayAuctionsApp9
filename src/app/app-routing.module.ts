import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuctionInfoService } from './components/resolvers/auction-info.service';
import { AuctionTableComponent } from './components/pages/auctionTable/auctionTable.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { SoldTableComponent } from './components/pages/soldItemsTable/soldTable.component';
import { DetailAuctionsComponent } from './components/pages/detail-auctions/detail-auctions.component';


const routes: Routes = [
  {path:'active', component:AuctionTableComponent, data: {status: [1, 0]}, resolve:{info:AuctionInfoService}},
  {path:'sold', component:SoldTableComponent, data: {status: [2,3,4,5]}, resolve:{info:AuctionInfoService}},
  {path:'details/:id', component:DetailAuctionsComponent},
  { path: '',
    redirectTo: '/active',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
