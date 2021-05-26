import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {
formatted: string=''

  transform(value: number, ): string {
    this.formatted=value.toString()
this.formatted=this.formatted.substring(0,2)+':'+this.formatted.substring(2,4)+':'+this.formatted.substring(4,6)
return this.formatted;
}

}
