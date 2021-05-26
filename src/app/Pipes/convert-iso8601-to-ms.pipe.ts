import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertISO8601ToMs'
})
export class ConvertISO8601ToMsPipe implements PipeTransform {

  transform(value: string): string {
    const v = value.substring(2);
    let hour = v.substring(0, v.indexOf('H'));
    let min = v.substring(v.indexOf('H') + 1, v.indexOf('M'));
    let sec = v.substring(v.indexOf('M') + 1, v.indexOf('S'));
    hour = hour ? hour : '0';
    min = min ? min : '0';
    sec = sec ? sec : '0';
    hour = Number(hour) >= 10 ? hour : '0' + hour;
    min = Number(min) >= 10 ? min : '0' + min;
    sec = Number(sec) >= 10 ? hour : '0' + sec;
    return `${hour}:${min}:${sec}`;
  }

}



