/*
 * First homework assignment
 * A RESTful json api that listens on port 3000
 * and return a message in JSON format.
 */

 // Dependecies
 var http = require('http');
 var url = require('url');
 var fs = require('fs');

 // load the greeting
 var greeting = fs.readFileSync('greeting','utf8');
 // Create the server
 var httpServer = http.createServer(function(req,res){
        // Parse the url
        var parsedUrl = url.parse(req.url, true);
  
        // Get the path
        var path = parsedUrl.pathname;
        var trimmedPath = path.replace(/^\/+|\/+$/g, '');
        
        res.setHeader('Content-Type', 'application/json');

        if (trimmedPath.toLowerCase() === 'hello') {
            res.end(JSON.stringify(greeting));    
        } else {
            res.end();
        };
 
});

// Listen on port
httpServer.listen(3000,function(){
console.log("The server is listening on port 3000");
});