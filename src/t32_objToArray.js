earningDataToArray()

console.log(JSON.stringify(res))
function earningDataToArray() {
  const data = [{
    ticker: 'STZ',
    when: 'bmo',
  }, {
    ticker: 'JKS',
    when: 'bmo',
  }, {
    ticker: 'ICAGY',
    when: '--',
  }, {
    ticker: 'FUJIY',
    when: '--',
  }, {
    ticker: 'AMADY',
    when: '--',
  }, {
    ticker: 'DNZOY',
    when: '--',
  }, {
    ticker: 'REPYY',
    when: '--',
  }, {
    ticker: 'GLPEY',
    when: '--',
  }, {
    ticker: 'SEOAY',
    when: '--',
  }, {
    ticker: 'FRTAF',
    when: '--',
  }, {
    ticker: 'AVAL',
    when: '--',
  }, {
    ticker: 'TOPCF',
    when: '--',
  }, {
    ticker: 'GWGH',
    when: '--',
  }]
  const res = []
  for (let i = 0; i < data.length; i++) {
    res.push(data[i].ticker)
  }
}

