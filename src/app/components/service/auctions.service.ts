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
  getAuctionById(id:String){
    return this._HTTP.post<any>(environment.apiAuctions+'/getAuctionByID',{id:id});
  }
  createNewAuction(data:any){
    return this._HTTP.post<any>(environment.apiAuctions+'/saveNewAuction',data);
  }
  updateReListByID(id:String, date:string){
    return this._HTTP.post<any>(environment.apiAuctions+'/updateReListByID',{id:id,date:Date.parse(date)});
  }
  updateSoldAuction(data:any){
    return this._HTTP.post<any>(environment.apiAuctions+'/updateSoldByID',data);
  }
  updatePaidAuction(data:any){
    return this._HTTP.post<any>(environment.apiAuctions+'/updatePaidByID',data);
  }
  updatePostAuction(data:any){
    return this._HTTP.post<any>(environment.apiAuctions+'/updatePostByID',data);
  }
  updateDeliveredAuction(data:any){
    return this._HTTP.post<any>(environment.apiAuctions+'/updateDeliveryByID',data);
  }
  updateFeesAuction(data:any){
    return this._HTTP.post<any>(environment.apiAuctions+'/updateFeesByID',data);
  }
  findEbayAuctionNumber(data:any){
    return this._HTTP.post<any>(environment.apiAuctions+'/findEbayAuction',{auction:data});
  }
}
