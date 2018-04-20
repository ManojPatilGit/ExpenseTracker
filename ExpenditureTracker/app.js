
var http = require('http');
var fs = require('fs');
var path = require("path");
var url = require('url');
var util = require('util')
//var express = require('express');

http.createServer(function(req, resp){
    if (req.method =='GET') {
        console.log(req.url.toLowerCase());
               
        if ( req.url.toLowerCase() === '/index.html' || req.url.toLowerCase() === '/'){
             resp.writeHead(200, {'content-type':'text/html'});
            fs.createReadStream('.\\View\\Index.html').pipe(resp);    
        }   
        else if(req.url.toLowerCase() === '/about.html'){
            resp.writeHead(200, {'content-type':'text/html'});
            fs.createReadStream('.\\View\\About.html').pipe(resp);     
        }
        else {
            resp.writeHead(404, {'content-type':'text/plain'});
            resp.write(" File Not found ");  
            resp.end();
        }     
    }

    if (req.method =='POST') {
        console.log('manoj');
    }
   
   
}).listen(9100);
console.log('server started');


