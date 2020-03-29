import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuctionInfoService } from './components/resolvers/auction-info.service';
import { AuctionTableComponent } from './components/pages/1-auctionTable/auctionTable.component';
import { SoldTableComponent } from './components/pages/2-soldItemsTable/soldTable.component';
import { DetailAuctionsComponent } from './components/pages/8-detail-auctions/detail-auctions.component';
import { PageNotFoundComponent } from './components/pages/9-page-not-found/page-not-found.component';
import { EbayFeesComponent } from './components/pages/3-ebay-fees/ebay-fees.component';
import { PaypalFeesComponent } from './components/pages/4-paypal-fees/paypal-fees.component';
import { BootstrapTableComponent } from './components/pages/bootstrap-table/bootstrap-table.component';


const routes: Routes = [
  {path:'active', component:AuctionTableComponent, data: {status: [1, 0]}, resolve:{info:AuctionInfoService}},
  {path:'sold', component:SoldTableComponent, data: {status: [2,3,4,5]}, resolve:{info:AuctionInfoService}},
  {path:'details/:id', component:DetailAuctionsComponent},
  {path:'ebayFees', component:EbayFeesComponent},
  {path:'paypalFees', component:PaypalFeesComponent},
  {path:'test', component:BootstrapTableComponent},
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
