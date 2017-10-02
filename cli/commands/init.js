'use strict'

function prompt(question, callback) {
  var stdin = process.stdin,
    stdout = process.stdout;

  stdin.resume();
  stdout.write(question);

  stdin.once('data', function (data) {
    callback(data.toString().trim());
  });
}

module.exports = function init() {
	prompt('Whats your name?', (input) => {
    console.log(input);
    //process.exit();
  })
}

//exports = module.exports = init