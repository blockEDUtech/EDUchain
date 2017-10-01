'use strict'

//const Ownable = artifacts.require('./Ownable.sol')

class University {
	constructor(address) {
		this.address = address
		//this.instance = Ownable.at(this.address)

	}

	async getOwnable() {
		console.log('in getOwnable')
		return 'weee'
	}
}

exports = module.exports = University