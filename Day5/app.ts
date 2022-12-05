import fs from "fs";

//read input file
const input:string[][] = fs.readFileSync("input.txt", "utf-8").split("\r\n\r\n").map(e => e.split("\r\n"));

//calculate number of columns
const range:number = input[0].reverse()[0].trim().split("  ").map(e => Number(e)).reverse()[0];

//create payload array
let payload:string[][] = [...Array(range)].map(_=>Array());

input[0].forEach(e => {
    for (let i = 0; i < range; i++){
        if(e[1+i*4] != " ") payload[i].push(e[1+i*4]);
    }
});
//copy payload array
const payload1:string[][] = payload.map(arr => {return arr.slice();});


//move items on payload accordingly to task1 instructions
input[1].forEach(e => {
    const moves = e.split(" ");
    for (let i = 0; i < Number(moves[1]); i++) {
        payload[Number(moves[5]) - 1].push(payload[Number(moves[3]) - 1].pop());
    }
})

//output top items
let res1:string = "";
payload.forEach(e => res1 += e.pop());

console.log(res1);


//move items on payload accordingly to task2 instructions 
input[1].forEach(e => {
    const moves = e.split(" ");
    payload1[Number(moves[5]) - 1] = payload1[Number(moves[5]) - 1]
        .concat(payload1[Number(moves[3]) - 1]
                .splice(-Number(moves[1]), Number(moves[1]))
        );
})

//output top items
let res2:string = "";
payload1.forEach(e => res2 += e.pop());

console.log(res2);