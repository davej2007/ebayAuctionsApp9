import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastDate'
})
export class LastDatePipe implements PipeTransform {
  public MONTHS :any =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  
  transform(value: [number]): unknown {
    let lastDate:any = new Date(value.pop())
    let output = lastDate.getDate().toString() + '-' + this.MONTHS[lastDate.getMonth()] + '-' + lastDate.getFullYear().toString()
    .slice(-2);
    return output


    
  }

}
