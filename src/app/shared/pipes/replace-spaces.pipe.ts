import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpaces'
})
export class ReplaceSpacesPipe implements PipeTransform {

  transform(value: string, args: string): string {
    value = value.split(' ').join(args).toLocaleLowerCase();
    return value;
  }

}


//
//
