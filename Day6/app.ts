import fs from "fs";
//read data
const input:string = fs.readFileSync("input.txt", "utf-8");

//find 4 different characters in a row 
for (let i = 0; i < input.length - 4; i++){
    if([...input.slice(i,i+4)]
        .map(e => [...input.slice(i,i+4)].indexOf(e))
        .reduce((a,b) => a + b) == 6){
            console.log(i+4);
            break;
        }
}

//find 14 different characters in a row 
for (let i = 0; i < input.length - 14; i++){
    if([...input.slice(i,i+14)]
        .map(e => [...input.slice(i,i+14)].indexOf(e))
        .reduce((a,b) => a + b) == 91){
            console.log(i+14);
            break;
        }
}