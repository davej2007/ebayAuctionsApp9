import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  constructor(public _HTTP:HttpClient) { }

  getAuctionDetails(){
    return this._HTTP.post<any>(environment.apiAuctions+'/getAuctionInfo',{});
  }
  createNewAuction(data:any){
    return this._HTTP.post<any>(environment.apiAuctions+'/saveNewAuction',data);
  }
}
