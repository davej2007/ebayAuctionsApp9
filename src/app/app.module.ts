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
import { PaidModalContent } from './components/pages/auctionTable/Modals/3-Paid/paid';
import { SoldModalContent } from './components/pages/auctionTable/Modals/2-Sold/sold';
import { PostModalContent } from './components/pages/auctionTable/Modals/4-Post/post';
import { DeliveryModalContent } from './components/pages/auctionTable/Modals/5-Delivery/delivery';
import { FeesModalContent } from './components/pages/auctionTable/Modals/Fees/fees';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
    AuctionTableComponent,
      NewAuctionModalContent,
      UnSoldModalContent,
      SoldModalContent,
      PaidModalContent,
      PostModalContent,
      DeliveryModalContent,
      FeesModalContent,
    TableSortPipe
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
