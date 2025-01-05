const fs =require("fs");
let txt=fs.readFileSync("reade.txt","utf-8");
txt=txt.replace("created","wahidur");
console.log(txt);

fs.writeFileSync("wahidur.txt","this is from node js");


