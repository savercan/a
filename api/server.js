const express = require('express');
const lessonsRouter = require('../Routes/lessons-routes')

const server = express();

server.use(express.json())



server.get('/', (req,res) =>{
    res.json({ "message":"I am Son of Hal and am always watching!"});
});

server.use('/api/lessons', lessonsRouter)


module.exports = server;