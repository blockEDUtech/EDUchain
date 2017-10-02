'use strict'

const EDUchain = require('../../lib/educhain.js')

module.exports = function ls() {
  let edu = new EDUchain({address:'0x0'})
  edu.ls().then(unis => {
    for(let i in unis) {
      console.log(unis[i])
    }
    process.exit()
  })
}
