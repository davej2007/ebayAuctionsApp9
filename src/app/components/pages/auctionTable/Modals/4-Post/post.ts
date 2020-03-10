import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuctionsService } from 'src/app/components/service/auctions.service';


@Component({
  selector: 'post-modal-content',
  templateUrl: `./post.html`,
  styleUrls: ['../modal.css']
})
export class PostModalContent implements OnInit {
  @Input() id:String;
  @Input() description:String;
    constructor(
        public activeModal: NgbActiveModal,
        public auction:AuctionsService) {}


    ngOnInit(){}
    // Variables
    public errorMsg:String = '';
    public successMsg:String = '';
    public processing:Boolean = false;
    
}