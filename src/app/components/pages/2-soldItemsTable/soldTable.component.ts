import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IAuction } from '../../custom/Interfaces/auction';
import { STATUS, CATEGORIES } from '../../custom/defaultValues';
import { PaidModalContent } from './Modals/3-Paid/paid';
import { PostModalContent } from './Modals/4-Post/post';
import { DeliveryModalContent } from './Modals/5-Delivery/delivery';
import { FeesModalContent } from './Modals/Fees/fees';
import { AuctionsService } from '../../service/auctions.service';

@Component({
  selector: 'SoldTable',
  templateUrl: './soldTable.component.html',
  styleUrls: ['./soldTable.component.css']
})
export class SoldTableComponent implements OnInit {

  public AUCTIONS : IAuction[] = [];
  public StatusList : any = STATUS;
  public CategoryList : any = CATEGORIES;
  public StatusShow : [Number] ;
  public DisplayShow:any= [];
  public display : {month:number, year:number} = {month: null, year: null}
  public MONTHS :any =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  public category :Number;
  public status :[Number];

  constructor(
    private activatedRoute:ActivatedRoute,
    public modalService: NgbModal,
    public _auction:AuctionsService,
    public _Router:Router) {  }

  ngOnInit(): void {
    let date:Date = new Date();
    let currentmonth:number = date.getMonth();
    let currentyear:number = date.getUTCFullYear();
    let y:number= 2019;
    let m:number = 9;
    
    while ( currentyear>y || currentmonth>=m ) {
      this.DisplayShow.push({month:m,year:y});
      if(m==11){
        m=0;y++
      } else {
        m++
      }
    }
    this.activatedRoute.data.subscribe(
      data=>{
        this.StatusShow = data.status;
        this.status=this.StatusShow
        if(data.info.success){
          this.AUCTIONS = data.info.auctions;          
          this.AUCTIONS.sort((a,b) => a.sold.dateSold.toString().localeCompare(b.sold.dateSold.toString()));
        } else {
          console.log(data.info.message)
        }
      },
      err=>{console.log(err)}
      )
  }
  // Modal Buttons
  openPaid(auction:IAuction){
    console.log(auction._id);
    const modalRef = this.modalService.open(PaidModalContent, {backdrop:'static'});
    modalRef.componentInstance.id = auction._id;
    modalRef.componentInstance.description = auction.auction.description;
    modalRef.result.then(
      res => {
        if(res.success){
          this.reloadTableData()
        } else {
          console.log('Error from Modal : ', res)
        }
      }
    );
  }
  
  openPost(auction:IAuction){
    console.log(auction._id);
    const modalRef = this.modalService.open(PostModalContent, {backdrop:'static'});
    modalRef.componentInstance.id = auction._id;
    modalRef.componentInstance.description = auction.auction.description;
    modalRef.componentInstance.buyerName = auction.sold.buyer.name;
    modalRef.componentInstance.buyerPostCode = auction.sold.buyer.postCode;
    modalRef.result.then(
      res => {
        if(res.success){
          this.reloadTableData()
        } else {
          console.log('Error from Modal : ', res)
        }
      }
    );
  }
  openDelivery(auction:IAuction){
    console.log(auction._id);
    const modalRef = this.modalService.open(DeliveryModalContent, {backdrop:'static'});
    modalRef.componentInstance.id = auction._id;
    modalRef.componentInstance.description = auction.auction.description;
    modalRef.result.then(
      res => {
        if(res.success){
          this.reloadTableData()
        } else {
          console.log('Error from Modal : ', res)
        }
      }
    );
  }
  openFees(auction:IAuction){
    const modalRef = this.modalService.open(FeesModalContent, {backdrop:'static'});
    modalRef.componentInstance.id = auction._id;
    modalRef.componentInstance.description = auction.auction.description;
    modalRef.componentInstance.final = auction.fees.finalFee;
    modalRef.componentInstance.postage = auction.fees.postageFee;
    modalRef.componentInstance.paypal = auction.fees.paypalFee;
    modalRef.result.then(
      res => {
        if(res.success){
          this.reloadTableData()
        } else {
          console.log('Error from Modal : ', res)
        }
      }
    );
  }
  reloadTableData(){
    this._auction.getAuctionDetails().subscribe(
      data=>{
        if(data.success){
          this.AUCTIONS = data.auctions;
        } else {
          console.log(data.message)
        }
      },
      err=>{console.log(err)}
      )
  }
  
}
  