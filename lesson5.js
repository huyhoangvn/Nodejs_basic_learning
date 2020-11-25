const http = require('http');

const server = http.createServer((request, response) => {
    if(request.url === '/'){
        response.write('Hello');
        response.end();
    }

    if(request.url === '/something'){
        response.write(JSON.stringify([1, 2, 3]));
        response.end();
    }
})

server.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on PORT 3000');
});

//using HTTP but using express is more clean may be
