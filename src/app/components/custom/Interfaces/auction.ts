export interface IAuction {
    _id:String,
    status : number,
    category :number,
    auction : {
        dateListed : number,
        description : String,
        initialPrice : number,
        postage : number,
        weight : number
    },
    sold : {
        dateSold : number,
        auctionNo : number,
        price : number,
        buyer : {userName:String, name:String, postCode:String}
    },
    paid : {
        paidBy          : String,
        postage         : number,
        transactionNo   : String
    },
    fees :{
        finalFee : number,
        postageFee : number,
        paypalFee : number,
    },
    courier : {
        company:String,
        trackingNo:String,
        cost:number
    }
}