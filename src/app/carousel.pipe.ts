import {Pipe, PipeTransform} from '@angular/core';
import {DateHandlerService} from './date-handler.service';
import {EventDataService} from './event-data.service';


@Pipe({
  name: 'carousel'
})
export class Carousel implements PipeTransform {
  constructor(){}

   transform(value: any[], term): any[] {
     let dateHandler = new DateHandlerService();
    return value.map(items => {
      // Filtered array of names
      let arr = items.filter(item => {
        console.log(item.start_date === dateHandler.getDate());
        if (item.start_date === dateHandler.getDate()){
          console.log(item);
          return item;
        } 
       // return item.date === dateHandler.getDate();
      });
      return arr;
   
      // Adds the two arrays togheter and removes duplicates
     
    });
  }
}
