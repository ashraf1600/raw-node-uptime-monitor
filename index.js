/*
Title : Uptime Monitoring Application
Description : A RESTful API to monitor uptime of websites and notify when they are down
Author : Ashraf-Ul-Islam
Date : 2025-04-24
*/

// Dependencies
const http = require('http');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000
};

// handle request and response
app.handleReqRes = (req, res) => {
    res.end('Hello World!');
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`✅ Server is running on port ${app.config.port}`);
    });
};

// start the server
app.createServer();
