import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "andJoin",
})
export class AndJoinPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (Array.isArray(value)) {
      const arr = value.slice();
      const last = arr.pop();

      return arr.join(", ") + " and " + last;
    }

    return value;
  }
}
