'use strict'

const University = require('./university.js')
//import { University } from './university.js';
let university = new University('0x0')
university.getOwnable().then(x => {
	console.log(x)
})
//console.log(university)