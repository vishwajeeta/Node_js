const readline=require('readline');
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
r1.question("enter your name:",(num1)=>{
    console.log(num1);
    r1.close();
})