
'use strict'

/**
 * Module dependencies.
 */

const program = require('commander')
const edu = require('../lib/educhain.js')
const commands = require('./commands')
const utils = require('./utils')
const fs = require('fs')
const os = require('os')
const platform = os.platform()
const path = require('path')

program
  .version('0.0.1')
  .option('-p, --path <path>', 'path to educhain.conf', '/.educhain/educhain.conf')
  .option('-c, --chain <chain>', 'specify the ethereum network (mainnet|kovan|ropsten) [kovan]', 'kovan')
  .parse(process.argv)

// Assert that a VALID command is provided 
if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
  program.outputHelp();
  process.exit();
}

const network = program.chain
const confpath = program.path

const HOME = platform !== 'win32' ? process.env.HOME : process.env.USERPROFILE
const DATADIR = path.join(HOME, '.blockedu')

program
  .command('ls')
  .description('list all universities')
  .action(() => {
  	commands.ls()
  })

program
  .command('loadPrivKey')
  .description('load account private key')
  .option('-k, --key <key>', '')
  .action((key) => {
  	console.log(key)
  })

program
  .command('start')
  .description('create blockEDU identity')
  .action(() => {
  	commands.init()
  })


// console.log(' - sessions %j', program.sessions)
// console.log(' - template %j', program.template)
// console.log(' - css %j', program.css)
program.parse(process.argv)