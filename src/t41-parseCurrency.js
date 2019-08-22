const data = ["➝", null, "", "$245.00 ➝ $200.48	", "$247.00	", "$210.00 ➝ €160.00	", "€210.00 -> $160.00	", "£210.00 -> £160.00	", ]

let hasNumber = (s) => {
  return /\d/.test(s);
}

let getCurrencySymbol = (s) => {
  // {debugger;}
  let res = ""
  if (s === undefined || s === null || s === "" || !hasNumber(s)) {
    return res
  } else {
    let symb = s.match(/[$£€¥]/);

    if (symb[0] === '$') res = "USD"
    if (symb[0] === '£') res = "Pound"
    if (symb[0] === '€') res = "EUR"
    if (symb[0] === '¥') res = "Yen"
    return res
  }
}

for (let i = 0; i < data.length; i++) {
  console.log(getCurrencySymbol(data[i]))
  console.log("#################################");
}