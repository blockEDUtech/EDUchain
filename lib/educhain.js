'use strict'

const University = require('./university.js')
const api = require('./api')

// let university = new University('0x0')
// university.getOwnable().then(x => {
//  console.log(x)
// })

class EDUchain {
  constructor(options) {
    this.address = options.address
    //this.instance = Ownable.at(this.address)

  }

  async getOwnable() {
    console.log('in getOwnable')
    return 'weee'
  }

  async ls() {
    let arr = await api.ls()
    return arr
  }
}

exports = module.exports = EDUchain