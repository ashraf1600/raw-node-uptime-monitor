/*
title: 404 Not Found Handler
description: A module to handle 404 Not Found requests
author: Ashraf-Ul-Islam
date: 2025-04-24
*/

// module scaffolding 
const handler = {};

handler.notFoundhandler = (requestProperties, callback) => {
    console.log('❌ 404 Not Found!');
    callback(404, { message: '404 Not Found!' });
};

// Export the module
module.exports = handler;
