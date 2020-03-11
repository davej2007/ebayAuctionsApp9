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
  sold(details:any){
    console.log(details)
  }
    
}