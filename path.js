const path=require("path");
const moment=require("moment");
const fs = require("fs");


console.log(path.dirname(__filename));
console.log(path.extname("myfile.txt"));

console.log(moment().format("DD-MM-YYYY HH:MM"));
console.log(moment().add(7,"days").format("DD-MM-YYYY HH:MM"));
console.log(moment().format("dddd"));
console.log(moment().add(7,"days").format("dddd"));

fs.writeFile("test.txt","mca",function(err){
    if(err)throw err;
    console.log("file saved successfully!");

});

fs.readF
ile("test.txt","utf-8",function(err,data)
{
    if(err)throw err;
    console.log("file content:",data);
});
