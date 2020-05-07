import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "falseyValue",
})
export class FalseyValuePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === "") {
      return "\"\" (empty string)";
    }

    if (value === 0 || value === false || value == null) {
      return String(value);
    }

    if (isNaN(value as number)) {
      return "NaN";
    }

    return "Truthy: `" + value + "`";
  }
}
