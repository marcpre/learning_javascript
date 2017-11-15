const obj = { 'repeater-group[1][titel]': 'test',
  'repeater-group[1][description]': 'test',
  'repeater-group[3][titel]': 'asdf',
  'repeater-group[3][description]': 'test2',
  'repeater-group[5][titel]': 'adsf',
  'repeater-group[5][description]': 'test2' }

const out = {}

for (const key in obj) {
  const value = obj[key]

  const match = /repeater-group\[([0-9])\]\[([a-z]+)\]/.exec(key)
  const index = match[1]
  const property = match[2]
  
  out[index] = {...out[index], [property]: value} 
}

Object.keys(out).forEach(i => console.log(`${out[i].titel}, ${out[i].description}`))