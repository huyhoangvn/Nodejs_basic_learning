var animals = {
    "human" : 1,
    "dog" : 0,
    "cat" : -1,
    "mice" : -2
}
//javascipt obj

var { response } = require('express');
var express = require('express');
var app = express();

var sever = app.listen(process.env.PORT || 3000, ()=> {
    console.log('Server is running on PORT 3000');
});

app.use(express.static('html_store'));

app.get('/txt', async function(request, response){
    var {readFile} = require('fs').promises;
    response.send(await readFile('./test.txt', 'utf8'));
})

app.get('/search/all', (request, response)=>{
    response.send(animals);
})

//sentiment analysis api
app.get('/search/:animal', function(request, response){
    var animal = request.params.animal
    var reply;
    if(animals[animal]){
        reply = {
            "status" : "found",
            "animal" : animal,
            "score" : animals[animal]
        }
    }else {
        reply = {
            "status" : "not found",
            "animal" : animal
        }
    }
    response.send(reply);
})

app.get('/add/:animal/:score?', function(request, response){
    var data = request.params;
    var animal = data.animal;
    var score = data.score;
    if(!score){
        var reply = {
            "msg" : "Score is require"
        }
    }else{
        animals[animal] = Number(score);
        var reply = {
            msg : "Thank you for ya animal words-donation"
        }
    }
    response.send(reply);
})

app.get('*', function(request, response){
    response.status(404).send('Unable to load ' + request);
})