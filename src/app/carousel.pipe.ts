import {Pipe, PipeTransform} from '@angular/core';
import {EventDataService} from './event-data.service';


@Pipe({
  name: 'carousel'
})
export class Carousel implements PipeTransform {
  constructor(){}

   transform(value: any[], term): any[] {
     
    return value.map(items => {
      
      // Remove the '-' from the date so that we can filter the list later.
      let newItems = items.map(a => {
        a['start_date'] = a['start_date'].replace(/-/gi, '');
        return a;
      });
      
      // Filter out invalid dates.
      newItems = newItems.filter(a => {
        let date = Number(a['start_date']);
        return !isNaN(date);
      });
      
      // Sort the list by date.
      newItems.sort((a, b) => {
        let num1 = Number(a['start_date']);
        let num2 = Number(b['start_date']);
        
        if(num1 < num2) {
          return -1;
        }
        
        if (num1 > num2){
          return 1;
        }    
        
        return 0;    
      });
      
      // Add '-' to the date.
      newItems = newItems.map(a => {
        let dateAsString = a['start_date'];
        if(dateAsString.length == 8) {
          let year = dateAsString[0] + dateAsString[1] + dateAsString[2] + dateAsString[3] + '-';
          let month = dateAsString[4] + dateAsString[5] + '-';
          let day  = dateAsString[6] + dateAsString[7];
          a['start_date'] = year + month + day;
          return a;
        }
        
        return a;
      });
      
      // Make the list the size of 5
      newItems = newItems.filter((a, index) => {
        if(index < 5) return true;
        
        return false;
      });
      
      return newItems;     
    });
  }
}
