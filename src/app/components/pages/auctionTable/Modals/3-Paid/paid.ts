import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuctionsService } from 'src/app/components/service/auctions.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'paid-modal-content',
  templateUrl: `./paid.html`,
  styleUrls: ['../modal.css']
})
export class PaidModalContent implements OnInit {
  @Input() id:String;
  @Input() description:String;
  constructor(
    public activeModal: NgbActiveModal,
    private fb:FormBuilder,
    public _Auction:AuctionsService) {}
  // form Get
  get paidBy()  { return this.PaidForm.get('paidBy');   }
  get paypalTransaction()   { return this.PaidForm.get('paypalTransaction');   }
  get fee()  { return this.PaidForm.get('fee');   }
  
    ngOnInit(){}
    // Variables
    public errorMsg:String = '';
    public successMsg:String = '';
    public processing:Boolean = false;
    public paidByMethods:any = ['Cash', 'Bank Transfer', 'PayPal']

      // Form Definition
  PaidForm = this.fb.group({
    paidBy:['', [Validators.required]],
    paypalTransaction: [null],
    fee :[null]
  })
  disableForm(){    
    this.processing = true;
    this.paidBy.disable();
    this.paypalTransaction.disable();
    this.fee.disable();
  }
  enableForm(){
    this.processing = false;
    this.paidBy.enable();
    this.paypalTransaction.enable();
    this.fee.enable();
  }
  submit(paidDetails:any){
    console.log(paidDetails);
    this.disableForm();
    let paidAuctionData = {
      id:this.id,
      paidBy:paidDetails.paidBy,
      paypalTransaction:paidDetails.paypalTransaction,
      paypalFee:paidDetails.fee
    }
    this._Auction.updatePaidAuction(paidAuctionData).subscribe(
      data => {
        console.log(data)
        if(!data.success){
          this.disableForm()
          this.errorMsg = data.message;
          setTimeout(()=>{
            this.errorMsg = '';
            this.enableForm();
          }, 2000);
        } else {
          this.successMsg='Auction Sold : '+data.auction.auction.description;
          setTimeout(()=>{
            this.successMsg = '';
            this.activeModal.close(data);
          }, 2000);
        }
      },
      err => {
        alert('Server Error : '+err.message+' If this continues Please contact Systems.');
        this.enableForm();
      }
    )
  }
}