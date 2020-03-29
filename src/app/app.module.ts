import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/pages/0-navbar/navbar.component';
import { AuctionTableComponent }    from './components/pages/1-auctionTable/auctionTable.component';
  import { NewAuctionModalContent } from './components/pages/1-auctionTable/Modals/NewAuction/newAuction';
  import { UnSoldModalContent }     from './components/pages/1-auctionTable/Modals/0-UnSold/UnSold';
  import { SoldModalContent }       from './components/pages/1-auctionTable/Modals/2-Sold/sold';
import { SoldTableComponent }       from './components/pages/2-soldItemsTable/soldTable.component';
  import { PaidModalContent }       from './components/pages/2-soldItemsTable/Modals/3-Paid/paid';
  import { PostModalContent }       from './components/pages/2-soldItemsTable/Modals/4-Post/post';
  import { DeliveryModalContent }   from './components/pages/2-soldItemsTable/Modals/5-Delivery/delivery';
  import { FeesModalContent }       from './components/pages/2-soldItemsTable/Modals/Fees/fees';
import { EbayFeesComponent }        from './components/pages/3-ebay-fees/ebay-fees.component';
import { PaypalFeesComponent }      from './components/pages/4-paypal-fees/paypal-fees.component';
import { DetailAuctionsComponent }  from './components/pages/8-detail-auctions/detail-auctions.component';
import { PageNotFoundComponent }    from './components/pages/9-page-not-found/page-not-found.component';

import { LastDatePipe }             from './components/custom/display-date.pipe';
import { DisplayPoundsPipe }        from './components/custom/display-pounds.pipe';
import { TableSortPipe }            from './components/custom/table-sort.pipe';
import { BootstrapTableComponent } from './components/pages/bootstrap-table/bootstrap-table.component';
import { NgbdSortableHeader } from './components/pages/bootstrap-table/sortable.directive';
import { DecimalPipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
  NgbdSortableHeader,

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
    LastDatePipe,
    DetailAuctionsComponent,
    DisplayPoundsPipe,
    EbayFeesComponent,
    PaypalFeesComponent,
    BootstrapTableComponent
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
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
