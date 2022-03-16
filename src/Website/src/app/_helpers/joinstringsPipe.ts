/*
 *
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinstrings',
})

export class JoinstringsPipe implements PipeTransform {
  transform(value) {
    return value.join(' ');
  }
}
