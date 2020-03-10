import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuctionsService } from 'src/app/components/service/auctions.service';


@Component({
  selector: 'delivery-modal-content',
  templateUrl: `./delivery.html`,
  styleUrls: ['../modal.css']
})
export class DeliveryModalContent implements OnInit {
    @Input() id:String;
    constructor(
        public activeModal: NgbActiveModal,
        public auction:AuctionsService) {}


    ngOnInit(){}
    // Variables
    public errorMsg:String = '';
    public successMsg:String = '';
    public processing:Boolean = false;
    
}