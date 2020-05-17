// let fs = require("fs");
// // // let rs = fs.createReadStream("2_instalacija.mp4");
// // // let ws = fs.createWriteStream("copyVideo.mp4");
// // // // rs.on("data",function(chunk){
// // // //     ws.write(chunk);
// // // // });
// // // rs.pipe(ws);
let http = require("http");
let server = http.createServer(function(req,res){
    if(req.url == "/"){
        res.setHeader("Content-Type","text/html");






        
    res.end("<h1>Pocetna stranica</h1>");
    }else if(req.url == "/gallery"){
        res.setHeader("Content-Type","text/html");
    res.end("<h1>Dobrodosli na galeriju</h1>");
    }
});
server.listen(1337,function(){
    console.log("slusamo na 1337");
})