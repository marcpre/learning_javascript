/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const fs = require('fs').promises

async function writeContentToFile(data) {
  const today = new Date()
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
  const time = `${today.getHours()}-${today.getMinutes()}-${today.getSeconds()}`
  const dateTime = `${date}_${time}`

  const p = `${__basedir}/data/${dateTime}_myText.txt`

  try {
    const res = await fs.writeFile(p, data)
    console.log(`Successfully saved file to: ${p} ${res}`)
  } catch (e) {
    console.log(e)
  }
}

async function main() {
  global.__basedir = __dirname

  /**
   * Generate Content
   */
  // load contentData
  const contentData = [{
    name: 'Company1',
    symbol: 'C1',
    rating: 'AAA',
  },
  {
    name: 'Company2',
    symbol: 'C2',
    rating: 'CC',
  },
  {
    name: 'Company3',
    symbol: 'C3',
    rating: 'BB',
  },
  {
    name: 'Company4',
    symbol: 'C4',
    rating: 'A',
  },
  ]
  console.log(contentData)

  contentArr = []
  contentData.forEach(async (items) => {
    // var x = arrayItem.prop1 + 2;

    const data = {
      CompanyName: items.name,
      Symbole: items.symbol,
      Rating: items.rating,
    }
    contentArr.push('######################################## \n')
    contentArr.push(JSON.stringify(data))
    console.log(data)
    console.log('########################################')
  })
  await writeContentToFile(contentArr)
}

main()
