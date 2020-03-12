import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/pages/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuctionTableComponent } from './components/pages/auctionTable/auctionTable.component';
import { TableSortPipe } from './components/custom/table-sort.pipe';
import { NewAuctionModalContent } from './components/pages/auctionTable/Modals/NewAuction/newAuction';
import { UnSoldModalContent } from './components/pages/auctionTable/Modals/0-UnSold/UnSold';
import { SoldModalContent } from './components/pages/auctionTable/Modals/2-Sold/sold';
import { PaidModalContent } from './components/pages/soldItemsTable/Modals/3-Paid/paid';
import { PostModalContent } from './components/pages/soldItemsTable/Modals/4-Post/post';
import { DeliveryModalContent } from './components/pages/soldItemsTable/Modals/5-Delivery/delivery';
import { FeesModalContent } from './components/pages/soldItemsTable/Modals/Fees/fees';
import { SoldTableComponent } from './components/pages/soldItemsTable/soldTable.component';
import { DetailAuctionsComponent } from './components/pages/detail-auctions/detail-auctions.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
    AuctionTableComponent,
      NewAuctionModalContent,
      UnSoldModalContent,
      SoldModalContent,
    SoldTableComponent,
      PaidModalContent,
      PostModalContent,
      DeliveryModalContent,
      FeesModalContent,
    TableSortPipe,
    DetailAuctionsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule, // HTTP client
    FormsModule, ReactiveFormsModule, // Forms
  ],
  entryComponents: [
    NewAuctionModalContent,
    UnSoldModalContent,
    SoldModalContent,
    PaidModalContent,
    PostModalContent,
    DeliveryModalContent,
    FeesModalContent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
