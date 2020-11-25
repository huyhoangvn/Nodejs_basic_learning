const EventEmitter = require('events');

const Logger = require('./lesson4_logger');//export class Logger
const logger = new Logger();//instance 

//event listener
logger.on('messageLogger', (arg)=>{
    console.log('Listener called', arg);
})
//event emit
logger.log("Success");