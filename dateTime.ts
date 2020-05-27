import {
  dayOfYear,
  currentDayOfYear,
} from "https://deno.land/std/datetime/mod.ts";

console.log(dayOfYear(new Date("2020-02-02")));
console.log(currentDayOfYear());

// Run "deno run dateTime.ts" in the terminal
