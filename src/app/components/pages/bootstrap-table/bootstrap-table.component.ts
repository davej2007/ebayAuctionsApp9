import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

import {Auction} from './auction';
import {AuctionServices} from './auction.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';
  
@Component({
  selector: 'bootstrap-table',
  templateUrl: './bootstrap-table.component.html',
  styleUrls: ['./bootstrap-table.component.css']
})
export class BootstrapTableComponent {

    auction$: Observable<Auction[]>;
    total$: Observable<number>;
  
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  
    constructor(public service: AuctionServices) {
      this.auction$ = service.auctions$;
      this.total$ = service.total$;
    }
  
    onSort({column, direction}: SortEvent) {
      // resetting other headers
      this.headers.forEach(header => {
        if (header.sortable !== column) {
          header.direction = '';
        }
      });
  
      this.service.sortColumn = column;
      this.service.sortDirection = direction;
    }
  }