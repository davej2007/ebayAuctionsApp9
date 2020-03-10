import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuctionsService } from 'src/app/components/service/auctions.service';


@Component({
  selector: 'unSold-modal-content',
  templateUrl: `./unSold.html`,
  styleUrls: ['../modal.css']
})
export class UnSoldModalContent {
  @Input() id:String;
  @Input() description:String;
  constructor(
      public activeModal: NgbActiveModal,
      public auction:AuctionsService) {}
  // Variables
  public errorMsg:String = '';
  public successMsg:String = '';
  public processing:Boolean = false;
  public dateListed:String;

  relist(date:String){
    if(!date){
      console.log('draft')
    } else {
      this.auction.getAuctionById(this.id).subscribe(
        data=>{
          console.log(data)
        },
        err =>  {
          alert('Server Error : '+err.message+' If this continues Please contact Systems.');
        }
      )
    }
  }
}