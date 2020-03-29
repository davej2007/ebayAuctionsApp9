import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuctionsService } from '../../service/auctions.service';

@Component({
  selector: 'ebay-fees',
  templateUrl: './ebay-fees.component.html',
  styleUrls: ['./ebay-fees.component.css']
})
export class EbayFeesComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    public _Auction:AuctionsService) {}
  // form Get
  get _id()  { return this.FeeForm.get('_id');   }
  get dateSold()  { return this.FeeForm.get('dateSold');   }
  get ebayAuctionNumber()  { return this.FeeForm.get('ebayAuctionNumber');   }
  get description()   { return this.FeeForm.get('description');   }
  get finalFee()     { return this.FeeForm.get('finalFee');   }
  get postageFee()  { return this.FeeForm.get('postageFee');   }
  
  ngOnInit(){
    this.FeesList.push({_id:'1234',dateSold:122345464464, ebayAuctionNumber:'12345', description:'test item',finalFee:0,postageFee:0})
  }
  // Variables
  public errorMsg:String = '';
  public successMsg:String = '';
  public processing:Boolean = false;
  public FeesList:any = [];
  public validEbayAuction:Boolean = false;
  public validEbayMessage:String = '';

  // Form Definition
  FeeForm = this.fb.group({
    _id:null,
    dateSold:null,
    ebayAuctionNumber: [null, [Validators.required]],
    description:['', [Validators.required]],
    finalFee:[null, [Validators.required]],
    postageFee:null
  })
  disableForm(){    
    this.processing = true;
    this.ebayAuctionNumber.disable();
    this.finalFee.disable();
    this.postageFee.disable();
  }
  enableForm(){
    this.processing = false;
    this.ebayAuctionNumber.enable();
    this.finalFee.enable();
    this.postageFee.enable();    
  }
  findAuctionNumber(){
    let auction:string = this.ebayAuctionNumber.value;
    let index = this.FeesList.findIndex((i: any ) => i.ebayAuctionNumber === auction);
    console.log(index)
    if (index != -1){
      this._id.setValue(this.FeesList[index]._id);
      this.dateSold.setValue(this.FeesList[index].dateSold)
      this.description.setValue(this.FeesList[index].description)
      this.finalFee.setValue(this.FeesList[index].finalFee)
      this.postageFee.setValue(this.FeesList[index].postageFee)
      this.validEbayAuction = true;    
    } else {
      this._Auction.findEbayAuctionNumber(auction).subscribe(
        data =>{
          if(!data.success){
            this._id.setValue(null);
            this.dateSold.setValue(null)
            this.description.setValue(null)
            this.finalFee.setValue(null)
            this.postageFee.setValue(null)
            this.validEbayAuction =  false;
            this.validEbayMessage = data.message;
          } else {
            this._id.setValue(data.auction._id);
            this.dateSold.setValue(data.auction.sold.dateSold)
            this.description.setValue(data.auction.auction.description)
            this.finalFee.setValue(data.auction.fees.finalFee)
            this.postageFee.setValue(data.auction.fees.postageFee)
            this.validEbayAuction = true;    

          }
          
        },
        err =>  {
          alert('Server Error : '+err.message+' If this continues Please contact Systems.');
        }
      )
    }
  }
  
  submit(value:any){
    this.processing= true;
    this.FeesList.push(value);
    this.FeeForm.reset();
    this.processing = false;
  }
  clear(){
    this.processing= true;
    this.FeeForm.reset();
    this.processing = false;
  }
  finished(){}
  cancel(){}
  
}
