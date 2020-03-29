import {Injectable, PipeTransform} from '@angular/core';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

import { Auction } from './auction';
import { AUCTIONS } from './auctions';

import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import { SortColumn, SortDirection } from './sortable.directive';

interface SearchResult {
  auctions: Auction[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string, v2: string) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(auctions: Auction[], column: SortColumn, direction: string): Auction[] {
  if (direction === '' || column === '') {
    return auctions;
  } else {
    return [...auctions].sort((a, b) => {
      const res = compare(`${a[column]}`, `${b[column]}`);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(Auction: Auction, term: string, pipe: PipeTransform) {
  return Auction.description.toLowerCase().includes(term.toLowerCase())
    || pipe.transform(Auction.category).includes(term)
    || pipe.transform(Auction.dateListed).includes(term);
}

@Injectable({providedIn: 'root'})
export class AuctionServices {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _auction$ = new BehaviorSubject<Auction[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._auction$.next(result.auctions);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get auctions$() { return this._auction$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: SortColumn) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    // 1. sort
    let auctions = sort(AUCTIONS, sortColumn, sortDirection);

    // 2. filter
    auctions = auctions.filter(Auction => matches(Auction, searchTerm, this.pipe));
    const total = auctions.length;

    // 3. paginate
    auctions = auctions.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({auctions, total});
  }
}