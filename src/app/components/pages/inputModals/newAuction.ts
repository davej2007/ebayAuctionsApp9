import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuctionsService } from '../../service/auctions.service';


@Component({
  selector: 'newAuction-modal-content',
  templateUrl: `./newAuction.html`,
  styleUrls: ['./modal.css']
})
export class NewAuctionModalContent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
    private fb:FormBuilder,
    public auction:AuctionsService) {}

  // form Get
  get status()          { return this.newAuctionForm.get('status');   }
  get dateListed()      { return this.newAuctionForm.get('dateListed');   }
  get description()     { return this.newAuctionForm.get('description');   }
  get initialPrice()    { return this.newAuctionForm.get('initialPrice');   }
  get category()        { return this.newAuctionForm.get('category');   }
  get postagePaid()     { return this.newAuctionForm.get('postagePaid');   }
  get weight()          { return this.newAuctionForm.get('weight');   }
  
  ngOnInit(){}
    
  // Variables
  errorMsg:String = '';
  successMsg:String = '';
  processing:Boolean = false;
  descriptionValid:Boolean = true;
  
  // Form Definition
  newAuctionForm = this.fb.group({
    status: [1, [Validators.required]],
    dateListed: [null, [Validators.required]],
    description:['', [Validators.required]],
    initialPrice:[null, [Validators.required]],
    category:[null, [Validators.required]],
    postagePaid:[null, [Validators.required]],
    weight:[null, [Validators.required]]
  })
  disableForm(){    
    this.processing = true;
    this.status.disable();
    this.dateListed.disable();
    this.description.disable();
    this.initialPrice.disable();
    this.category.disable();
    this.postagePaid.disable();
    this.weight.disable();
  }
  enableForm(){
    this.processing = false;
    this.status.enable();
    this.dateListed.enable();
    this.description.enable();
    this.initialPrice.enable();
    this.category.enable();
    this.postagePaid.enable();
    this.weight.enable();
  }
  submit(newAuction){
    console.log(newAuction);
    this.disableForm();
    let newAuctionData = {
      dateListed:Date.parse(newAuction.dateListed),
      description:newAuction.description,
      initialPrice:newAuction.initialPrice,
      postagePaid:newAuction.postagePaid,
      category:newAuction.category
    }
    console.log(newAuctionData)
    this.auction.createNewAuction(newAuctionData).subscribe(
      data => {
        console.log(data)
        if(!data.success){
          
        } else {

        }
      },
      err => {
        alert('Server Error : '+err.message+' If this continues Please contact Systems.');
        this.enableForm();
      }
    )
  }
  
}