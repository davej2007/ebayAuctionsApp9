import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IAuction } from '../../custom/Interfaces/auction';
import { STATUS, CATEGORIES } from '../../custom/defaultValues';
import { UnSoldModalContent } from './Modals/0-UnSold/UnSold';
import { NewAuctionModalContent } from './Modals/NewAuction/newAuction';
import { SoldModalContent } from './Modals/2-Sold/sold';
import { PaidModalContent } from './Modals/3-Paid/paid';
import { PostModalContent } from './Modals/4-Post/post';
import { DeliveryModalContent } from './Modals/5-Delivery/delivery';
import { FeesModalContent } from './Modals/Fees/fees';
import { AuctionsService } from '../../service/auctions.service';

@Component({
  selector: 'auctionTable',
  templateUrl: './auctionTable.component.html',
  styleUrls: ['./auctionTable.component.css']
})
export class AuctionTableComponent implements OnInit {

  public AUCTIONS : IAuction[] = [];
  public StatusList : any = STATUS;
  public CategoryList : any = CATEGORIES;
  public StatusShow : [Number] ;

  public category :Number;
  public status :[Number];

  constructor(
    private activatedRoute:ActivatedRoute,
    public modalService: NgbModal,
    public _auction:AuctionsService,
    public _Router:Router) {  }

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
  openUnsold(auction:IAuction){
    const modalRef = this.modalService.open(UnSoldModalContent, {backdrop:'static'});
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
  openNewAuction() {
    this.modalService.open(NewAuctionModalContent, {backdrop:'static', size: 'xl'}).result.then(
      res => {
        console.log(res)
        if(res.success){
          this.reloadTableData()
        } else {
          console.log('Error from Modal : ', res)
        }
      },
      reason => { console.log('Create Cancelled.') }
    );
  }
  openSold(auction:IAuction){
    console.log(auction._id);
    const modalRef = this.modalService.open(SoldModalContent, {backdrop:'static'});
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
  }
  openDelivery(auction:IAuction){
    console.log(auction._id);
    const modalRef = this.modalService.open(DeliveryModalContent, {backdrop:'static'});
    modalRef.componentInstance.id = auction._id;
    modalRef.componentInstance.description = auction.auction.description;
  }
  openFees(auction:IAuction){
    console.log(auction._id);
    const modalRef = this.modalService.open(FeesModalContent, {backdrop:'static'});
    modalRef.componentInstance.id = auction._id;
    modalRef.componentInstance.description = auction.auction.description;
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
  