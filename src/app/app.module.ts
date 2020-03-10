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
import { NewAuctionModalContent } from './components/pages/inputModals/newAuction';
import { TableSortPipe } from './components/custom/table-sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
    AuctionTableComponent,
      NewAuctionModalContent,
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
    NewAuctionModalContent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
