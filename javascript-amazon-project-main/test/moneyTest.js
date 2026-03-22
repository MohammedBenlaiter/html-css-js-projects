import { formatCurrency } from "../scripts/utils/money.js";

console.log(
  `converts cents into dollars - ${formatCurrency(2095) === "20.95" ? "passed" : "failed"}`,
);

console.log("work with 0");

if (formatCurrency(0) === "0.00") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("rounds up to the nearest cent");

if (formatCurrency(2000.5) === "20.01") {
  console.log("passed");
} else {
  console.log("failed");
}
