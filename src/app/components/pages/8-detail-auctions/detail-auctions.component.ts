import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuctionsService } from '../../service/auctions.service';
import { IAuction } from '../../custom/Interfaces/auction';
import { STATUS, CATEGORIES } from '../../custom/defaultValues';

@Component({
  selector: 'detail-auctions',
  templateUrl: './detail-auctions.component.html',
  styleUrls: ['./detail-auctions.component.css']
})
export class DetailAuctionsComponent implements OnInit {

  constructor(
    private _Activatedroute:ActivatedRoute,
    public _Auction:AuctionsService) { }

    // Variables
    public errorMsg:String = '';
    public successMsg:String = '';
    public processing:Boolean = false;
    public id:any
    public AUCTION : IAuction = null;
    public TOTAL : number = 0;
    public StatusList : any = STATUS;
  public CategoryList : any = CATEGORIES;
  

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id');
      console.log(this.id);
      this._Auction.getAuctionById(this.id).subscribe(
        data=>{
          console.log(data)
          if(data.success){
            this.AUCTION = data.auction;

            // this.TOTAL = this.AUCTION.sold.price+this.AUCTION.paid.postage;
            console.log(this.AUCTION)
            this.processing = true
          } else {
            this.errorMsg = data.message
          }
          console.log(data);
          
        },
        err =>  {
          alert('Server Error : '+err.message+' If this continues Please contact Systems.');
        }
      )
  });
  }

}
