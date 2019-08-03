let numb = ["84.0711 billion", "$52.6138 billion", "$43.55 billion", "$54.73 million"]
const res = []

for (let i = 0; i < numb.length; i++) {
  res.push(convertNumber(numb[i]))
}
console.log(JSON.stringify(res));

function convertNumber(numb) {
  var digits = +numb.replace(/[^\d.]/g, '');
  if (numb.match('billion')) digits = digits * 1000000000
  if (numb.match('million')) digits = digits * 1000000
  return digits
}