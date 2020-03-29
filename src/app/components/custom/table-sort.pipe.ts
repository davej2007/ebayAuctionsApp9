import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableSort'
})
export class TableSortPipe implements PipeTransform {

  transform(values: any[], status:any[], category:any, display:any): any {
    let startDate:number = 0; let finishDate = 0    
    if (display.month!==null && display.year!==null) {
      startDate=Date.parse(new Date(display.year, display.month).toString())
      if(display.month==11){
        finishDate=Date.parse(new Date(display.year+1, 0).toString())-86400000
      } else {
        finishDate=Date.parse(new Date(display.year, display.month+1).toString())-86400000
      }
    }
    if (!values) return [];
    return values.filter(it => {
      if((category === undefined || it.category === category)
        && status.indexOf(it.status)!= -1 
        && ( (startDate==0 && finishDate==0) || (startDate<=it.sold.dateSold && it.sold.dateSold<= finishDate ))){
        return true
      } else {
        return false
      }
    });
  }

}