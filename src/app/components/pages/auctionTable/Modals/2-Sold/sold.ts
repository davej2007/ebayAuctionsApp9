import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuctionsService } from 'src/app/components/service/auctions.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'sold-modal-content',
  templateUrl: `./sold.html`,
  styleUrls: ['../modal.css']
})

export class SoldModalContent implements OnInit {
  @Input() id:String;
  @Input() description:String;
  constructor(
    public activeModal: NgbActiveModal,
    private fb:FormBuilder,
    public _Auction:AuctionsService) {}
  // form Get
  get dateSold()  { return this.SoldForm.get('dateSold');   }
  get auction()   { return this.SoldForm.get('auction');   }
  get price()     { return this.SoldForm.get('price');   }
  get name()      { return this.SoldForm.get('name');   }
  get postCode()  { return this.SoldForm.get('postCode');   }

    ngOnInit(){}
    // Variables
    public errorMsg:String = '';
    public successMsg:String = '';
    public processing:Boolean = false;

      // Form Definition
  SoldForm = this.fb.group({
    dateSold: [null, [Validators.required]],
    auction:['', [Validators.required]],
    price:[null, [Validators.required]],
    name:[null, [Validators.required]],
    postCode:[null, [Validators.required]],
  })
  disableForm(){    
    this.processing = true;
    this.dateSold.disable();
    this.auction.disable();
    this.price.disable();
    this.name.disable();
    this.postCode.disable();
  }
  enableForm(){
    this.processing = false;
    this.dateSold.enable();
    this.auction.enable();
    this.price.enable();
    this.name.enable();
    this.postCode.enable();
  }
  submit(soldAuction){
    console.log(soldAuction);
    this.disableForm();
    let soldAuctionData = {
      id:this.id,
      dateSold:Date.parse(soldAuction.dateSold),
      auction:soldAuction.auction,
      price:soldAuction.price,
      postagePaid:soldAuction.postagePaid,
      name:soldAuction.name,
      postCode:soldAuction.postCode.toUpperCase()
    }
    this._Auction.updateSoldAuction(soldAuctionData).subscribe(
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