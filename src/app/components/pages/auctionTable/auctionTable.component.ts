import { Component, PipeTransform, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewAuctionModalContent } from '../inputModals/newAuction';

import { STATUS, CATEGORIES } from '../../custom/defaultValues';
  
interface Auction {
  status : Number,
  category :Number,
  auction : {
      dateListed : Number,
      description : String,
      initialPrice : Number,
      postage : Number,
      weight : Number
  },
  sold : {
      dateSold : Number,
      auctionNo : Number,
      price : Number,
      buyer : {name:String, postCode:String}
  },
  fees :{
      finalFee : Number,
      postageFee : Number,
      paypalFee : Number,
  },
  courier : {
      company:String,
      trackingNo:String,
      cost:Number
  }
}

@Component({
  selector: 'auctionTable',
  templateUrl: './auctionTable.component.html',
  styleUrls: ['./auctionTable.component.css']
})
export class AuctionTableComponent implements OnInit {

  public AUCTIONS : Auction[] = [];
  public StatusList : any = STATUS;
  public CategoryList : any = CATEGORIES;
  public StatusShow : [Number] ;

  public category :Number;
  public status :[Number];

  constructor(
    private activatedRoute:ActivatedRoute,
    public modalService: NgbModal) {  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      data=>{
        this.StatusShow = data.status;
        this.status=this.StatusShow
        if(data.info.success){
          this.AUCTIONS = data.info.auctions;
        } else {
          console.log(data.info.message)
        }
      },
      err=>{console.log(err)}
      )
  }
  // Modal Buttons
  openUnsold(id:String){
    console.log(id);
  }
  openNewAuction() {
    this.modalService.open(NewAuctionModalContent, {backdrop:'static'}).result.then(
      res => {
        console.log(res)
        if(res.success){
          console.log(res)
        } else {
          console.log('Error from Modal : ', res)
        }
      },
      reason => { console.log('Create Cancelled.') }
    );
  }
  openSold(id:String){
    console.log(id);
  }

}
  