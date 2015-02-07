#!/usr/bin/env node

var child_process = require('child_process');
var subl = '/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl';

var argv = process.argv;
argv.shift();

if(argv.length > 1){
  var a = argv[0];
  if(a == '-h' || a == '--help'){
    // execFile: executes a file with the specified arguments
    child_process.execFile(subl, [], function(error, stdout, stderr){
    	console.log(stdout);
    });
  }
}
// execFile: executes a file with the specified arguments
child_process.execFile(subl, argv, function(error, stdout, stderr){
	console.log(stdout);
});