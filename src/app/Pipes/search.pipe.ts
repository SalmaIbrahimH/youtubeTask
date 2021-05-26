import { Pipe, PipeTransform } from '@angular/core';
import { Items } from '../veiwModels/Items';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(itemList: Items[], searchInput: string): Items[]{

    if (!itemList) {
console.log(itemList)
      return [];
    }
    if(!searchInput) {
      console.log(itemList)

      itemList;
    }
   searchInput = searchInput.toLowerCase();
   console.log(itemList)

   return itemList.filter(
       x =>x.snippet.title.toLowerCase().includes(searchInput)
   )
 }
}

