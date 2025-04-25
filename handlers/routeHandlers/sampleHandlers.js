/* 
title: Sample Handlers
description: A module to handle sample requests and responses
author: Ashraf-Ul-Islam
date: 2025-04-24
*/
// // module scaffolding

const handler = {};
handler.sampleHandler = ( requestProperties, callback ) => {
    console.log('Sample handler is working!'); // Log message to indicate the handler is working
    callback(200, { message: 'This is a sample response!' }); // Send a sample response with status code 200

}

module.exports = handler; // Exporting the sampleHandler module