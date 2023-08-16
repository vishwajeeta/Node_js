const fs =require('fs');

//to write the data
fs.writeFile("read_Write.txt","hello world!",(err)=>{
if(err) throw err;
console.log("the file has been saved!");
});

//to read the data
//if we don't add utf8 then it will print buffer data
fs.readFile("./read_Write.txt","utf8",(err,data)=>{
if (err) throw err;
console.log(data);
});