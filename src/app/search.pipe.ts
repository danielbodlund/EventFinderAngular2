import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class Search implements PipeTransform {

  transform(value: any[], term): any[] {
    
    if(value !== undefined) {
      return value.map(items => {
        // Filtered array of names
        let arr = items.filter(item => item.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
        
        // Filtered array of info
        let arr2 = items.filter(item => item.description.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
        
        // Adds the two arrays togheter and removes duplicates
        let result = arr.concat(arr2.filter((item) => {
          return arr.indexOf(item) < 0;
        }));
        
        return result.length > 0 ? result : ["no-events"];
      });
    } else {
      
      return ["no-events"];
    }
  }
}
