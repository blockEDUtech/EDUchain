'use strict'

const os = require('os')

exports = module.exports

exports.getRepoPath = getRepoPath
function getRepoPath () {
	return process.env.EDU_PATH || os.homedir() + '/.blockedu'
}