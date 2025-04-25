/*
 title: handleReqRes.js
 description: A module to handle HTTP requests and responses    
 author: Ashraf-Ul-Islam
 date: 2025-04-24
*/

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder'); 
const routes = require('../routes');
const { notFoundhandler } = require('../handlers/routeHandlers/notfiundHandlers');

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => { 
    // request handling
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const headers = req.headers;
    const queryStringObject = parsedUrl.query;

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        headers,
        queryStringObject,
        body: ''
    };

    const decoder = new StringDecoder('utf-8');
    let realdata = '';

    req.on('data', (buffer) => {
        realdata += decoder.write(buffer);
    });

    req.on('end', () => {
        realdata += decoder.end();

        // try to parse JSON string body
        try {
            requestProperties.body = JSON.parse(realdata);
        } catch {
            requestProperties.body = {};
        }

        const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundhandler;

        chosenHandler(requestProperties, (statusCode, payload) => {
            statusCode = typeof(statusCode) === 'number' ? statusCode : 200;
            payload = typeof(payload) === 'object' ? payload : {};

            const payloadString = JSON.stringify(payload);

            res.setHeader('Content-Type', 'application/json');
            res.writeHead(statusCode);
            res.end(payloadString);
        });
    });
};

module.exports = handler;
