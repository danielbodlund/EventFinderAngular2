import {Pipe, PipeTransform} from '@angular/core';
import {EventDataService} from './event-data.service';


@Pipe({
  name: 'carousel'
})
export class Carousel implements PipeTransform {
  constructor(){}

   transform(value: any[], term): any[] {
     
    return value.map(items => {
      var itemIndex = -1;
      // Filtered array of names
      
      items = items.reverse();
      let arr = items.filter(item => {
        
        if (itemIndex < 4){
          console.log(itemIndex);
          itemIndex += 1;
          return items[itemIndex];
        }
        
      });
      return arr;
   
      // Adds the two arrays togheter and removes duplicates
     
    });
  }
}
