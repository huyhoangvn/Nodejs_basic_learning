const EventEmitter = require('events');

var url = 'http://mylogger.io/log';
//Class Logger is children of EventEmitter
class Logger extends EventEmitter{
    log(message){
        //send an HTTP request 
        console.log(message);
        //raise an event 
        //this = logger -> emit
        this.emit('messageLogger', {
            'id' : 18001138,
            'url' : 'http://'
        })        
    }
}
//exports class
module.exports = Logger;
