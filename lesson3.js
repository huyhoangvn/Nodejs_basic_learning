//Path
const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

//OS
const os = require('os');

var freemem = os.freemem(); // return the amout of free memory 
var totalmem = os.totalmem(); //return the total memory

console.log(`Freemem: ${freemem}`);
console.log('Totalmem: ' + totalmem);
//template string help us build a string without concatenation
//${} is place holder , ` `

//FS
const fs = require('fs');
//non asynchonous
const file = fs.readdirSync('./');
console.log(file);//keep apear as JSON if doesnt get parsed
//asynchonous
fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);//not proper error handling
    else console.log('Result : ' + files);
})

//Event 
const EventEmitter = require('events');
const { emit } = require('process');
const emitter = new EventEmitter();
//Register listener
emitter.on('messageLogger', function(){
    console.log('Listener called');
})
//Raise an event 
emitter.emit('messageLogger');

//interesting eff at the end

//Event argument

emitter.on('messageLogger2', function(argument){
    console.log('Listener called ', argument);
})

emitter.emit('messageLogger2', {
    'id' : 18001138,
    'url' : 'http://'
})

