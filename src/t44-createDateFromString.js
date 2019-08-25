const d = "8/16/2019"

function createUTCDate(date) {
  const [month, day, year] = date.split("/");
  const utcDate = Date.UTC(year, month, day);
  return new Date(utcDate)
}

function createUTCDate2(date) {
  // based on https://stackoverflow.com/questions/57643689/when-converting-date-i-get-previous-day#57643731
  return new Date(date + "Z")
}

console.log(createUTCDate(d));
console.log(createUTCDate2(d));
