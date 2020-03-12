import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuctionsService } from '../../service/auctions.service';

@Component({
  selector: 'detail-auctions',
  templateUrl: './detail-auctions.component.html',
  styleUrls: ['./detail-auctions.component.css']
})
export class DetailAuctionsComponent implements OnInit {

  constructor(
    private _Activatedroute:ActivatedRoute,
    public _auction:AuctionsService) { }

  // variables
  public id:any

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id');
      console.log(this.id); 
  });
  }

}
