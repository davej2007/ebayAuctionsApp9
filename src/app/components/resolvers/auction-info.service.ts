import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuctionsService } from '../service/auctions.service';

@Injectable({
  providedIn: 'root'
})
export class AuctionInfoService implements Resolve<any> {
  
  constructor(
    public _auction:AuctionsService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Observable<any> | Promise<any> | any{    
    return this._auction.getAuctionDetails();
  }
        
};

