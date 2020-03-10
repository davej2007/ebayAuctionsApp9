export interface IAuction {
    _id:String,
    status : Number,
    category :Number,
    auction : {
        dateListed : Number,
        description : String,
        initialPrice : Number,
        postage : Number,
        weight : Number
    },
    sold : {
        dateSold : Number,
        auctionNo : Number,
        price : Number,
        buyer : {name:String, postCode:String}
    },
    fees :{
        finalFee : Number,
        postageFee : Number,
        paypalFee : Number,
    },
    courier : {
        company:String,
        trackingNo:String,
        cost:Number
    }
  }