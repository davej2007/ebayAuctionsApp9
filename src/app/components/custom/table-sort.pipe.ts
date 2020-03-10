import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableSort'
})
export class TableSortPipe implements PipeTransform {

  transform(values: any[], status:any[], category:any): any {
    if (!values) return [];
    return values.filter(it => {
      if((category === undefined || it.category === category) && status.indexOf(it.status)!= -1) {
        return true
      } else {
        return false
      }
    });;
  }

}