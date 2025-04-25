/*
 title : Routes 
 description : A module to define routes for the server
 author : Ashraf-Ul-Islam
 date : 2025-04-24
*/

// dependencies
const { sampleHandler } = require('../handlers/routeHandlers/sampleHandlers'); // Corrected path

// route object
const routes = {
    sample: sampleHandler  // ✅ removed extra space
};

module.exports = routes;
