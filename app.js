const http = require('http');
const router = require('./routers/router');

const server = http.createServer((req, res) => {
    router(req,res);
})


server.listen(3000,() => {
    console.log(`server is running on port ${3000}`);
});