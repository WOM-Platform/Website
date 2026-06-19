/*
 *
 */
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "joinstrings",
  standalone: false,
})
export class JoinstringsPipe implements PipeTransform {
  transform(value: string[]): string {
    if (!value || !Array.isArray(value)) {
      return "";
    }
    return value.join(" ");
  }
}
