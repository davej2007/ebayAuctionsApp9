import { AbstractControl } from "@angular/forms";

export const  aDayIs = 86400000,
              aWeekIs = 604800000,
              Months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];

export function displayDate(date:Date, display:String){
    // y - 2 digit year Y - 4 digit year
    // m - short month M - long Month z - month lead zero
    // d - short date D - Day Z - date lead zero
   
    let months = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];
    let Months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
    let Days = ['Sun', 'Mon','Tues','Wed','Thurs','Fri','Sat']
    let rtnDate:String = ''
    display.split("").forEach(d => {
        if(d=='y'){
            rtnDate+=date.getFullYear().toString().slice(-2);
        } else if(d=='Y'){
            rtnDate+=date.getFullYear().toString()
        } else if(d=='m'){
            rtnDate +=months[date.getMonth()];
        } else if(d=='M'){
            rtnDate +=Months[date.getMonth()];
        } else if(d=='d'){
            rtnDate +=date.getDate().toString();
        } else if(d=='D'){
            rtnDate+=Days[date.getDay()];
        } else if(d=='z'){
            rtnDate+=('0'+(date.getMonth()+1).toString()).substr(-2);
        } else if(d=='Z'){
            rtnDate+=('0'+(date.getDate()).toString()).substr(-2)
        } else {
            rtnDate+= d
        }    
    });
    return rtnDate;
}