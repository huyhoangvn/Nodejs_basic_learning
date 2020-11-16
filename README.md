## LEARNING MATERIAL
Nodejs is runtime eviroment for running js
Non-blocking Asynchronous (a single threat handle multiple request not like it gonna wait)
Doesnt have to wait database to return data.
While database is exercute the query, that thread will be used to be serve another client
When database prepare a result it put a message in what we call an event queue,
Nodejs is continuously monitoring in the back ground when it find an event in this queue it will take it out and processing

//I/O intensive apps -> scalable 
//os, fs, events, http
