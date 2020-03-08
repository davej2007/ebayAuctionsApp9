import { Component, PipeTransform, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewAuctionModalContent } from '../inputModals/newAuction';

import { STATUS, CATEGORIES } from '../../custom/defaultValues';

interface Auction {
  status : Number,
  dateListed : Number,
  description : String,
  category : Number,
  initialPrice : Number,
  postagePaid : Number,
  weight : Number,
  dateSold :Number,
  pricePaid :Number,
  buyer : {name:String, postCode:String},
  courier : {company:String, trackingNo:String, cost:Number}
}

let AUCTIONS : Auction[] = [];

@Component({
  selector: 'auctionTable',
  templateUrl: './auctionTable.component.html',
  styleUrls: ['./auctionTable.component.css'],
  providers: [DecimalPipe]
})
export class AuctionTableComponent implements OnInit {

  auctions$: Observable<Auction[]>;
  filter = new FormControl('');
  category = new FormControl('');  
  public avalStatus : [Number] ;
public status : any = STATUS
public categories : any = CATEGORIES;

  constructor(
    private activatedRoute:ActivatedRoute,
    public modalService: NgbModal,
    pipe: DecimalPipe) {
      this.auctions$ = this.filter.valueChanges.pipe( startWith(''), map(text => search(text, pipe)) );
      this.auctions$ = this.category.valueChanges.pipe( startWith(''), map(text => selectCategory(text, pipe)) );
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      data=>{
        this.avalStatus = data.status;
        if(data.info.success){
          AUCTIONS = data.info.auctions;
        } else {
          console.log(data.info.message)
        }
      },
      err=>{console.log(err)}
      )
  }
  openNewAuction() {
    this.modalService.open(NewAuctionModalContent, {backdrop:'static'}).result.then(
      res => {
        if(res.success){
          console.log(res)
        } else {
          console.log('Error from Modal : ', res)
        }
      },
      reason => { console.log('Create Cancelled.') }
    );
  }
}
function search(text: string, pipe: PipeTransform): Auction[] {
  return AUCTIONS.filter(auction => {
    const term = text.toLowerCase();
    return auction.description.toLowerCase().includes(term)
        || pipe.transform(auction.status).includes(term)
        || pipe.transform(auction.category).includes(term)
  });
}
function selectCategory(text: number, pipe: PipeTransform): Auction[] {
  return AUCTIONS.filter(auction => {
    const term = text.toString();;
    return pipe.transform(auction.category).includes(term)
  });
}