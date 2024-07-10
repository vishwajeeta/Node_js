const fs =require('fs');
fs.writeFile("index.html","hello World!",(err)=>{
    if (err) throw err ;
    console.log("suclss full")
})
fs.readFile("index.html","utf8",(err,data)=>{
    if (err) throw err;
    console.log(data);
})