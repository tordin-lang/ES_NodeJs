
const { response } = require("express");
var express = require("express");
var apiServer = express();
var fs = require("fs");

console .log("funzia");
var a = 5;
var b = "3";
console.log(a+b);

var port = 3000;
var host = "localhost";
apiServer.listen(port, host, ()=>{
    console.log("server running at http://%s:d%", host, port);
});

apiServer.get("/", (request, response)=>{
    console.log("sono in get /", request);
    response.log("<h1>Ciao client sei in home</h1>");
});

var nome = "Tordin";
apiServer.get("/nome", (request, response)=>{
    console.log("richiesta get su nome");
    response.send("Ciao il mio nome è: " + nome);
});

apiServer.get("/mioNome" ,(request, response)=>{
    console.log("richiesta get su mioNome", request.query);
    response.send("Ciao, il tuo nome è: " + request.query.nome)
});

// http://localhost:3000/somma?a=1&b=2
// risultato = 3

apiServer.get("/somma", (request, response) => {
    console.log("somma request", request.query);
    //response.send("risultato = " + (request.query.a -(-request.query.b)));
    response.send("risultato = " + (parseInt(request.query.a) + parseInt(request.query.b)));
});


// http://localhost:3000/student?id=1
apiServer.get("/student", (request, response) => {
    console.log("student id: ", request.query.id);
    //leggere il file
    fs.readFile("studenti.json",  (err, data) => {
     if(err) {
      console.log("error: " + err);
     }else{
         var students = JSON.parse(data);
         response.send(students.find(x => x.id == request.query.id));
    }
  }); 
    //prelevare l'oggetto con id 1
    //send
});


// http://localhost:3000/newStudent?id=3&name=mattia&surname=amati
apiServer.get("/newStudent", (request, response) => {
    console.log("student id: ", request.query);
    no
});