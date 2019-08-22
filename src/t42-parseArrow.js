const data = ["abdk3", "$999.00	", "$245.00 ➝ $200.48	", "➝", null, "", "$666.00 ➝ $100.48	", "$247.00	", "$770.00 ➝ €880.00	", "€530.00 -> $333.00	", "£310.00 -> £960.00	", ]

let splitArrow = (item) => {
  // Transform strings to number pairs if possible, or return empty array
  if (typeof item === "string") {
    // Remove whitespaces and currency symbols from string and split result by array schemes
    let parts = item.replace(/[\s$€£]*/g, '', '').split(/➝|->/)
    if (parts.length === 1) {
      let res = parts.filter(part => !!part).map(Number.parseFloat)
      if(isNaN(res[0])) return [];
      return [res[0], res[0]]
    }
    if (parts.length > 1) {
      return parts.filter(part => !!part).map(Number.parseFloat)
    }
  }
  return [];
}

let res = []
for (let i = 0; i < data.length; i++) {
  res = splitArrow((data[i]) ? data[i].trim() : null)
  console.log(res[0] + " : " + res[1])
}

// wanted output:
/* 245.00
200.48
""
""
""
""
""
""
245.00
200.48 */