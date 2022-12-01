import fs from 'fs';

//read input
const input = fs.readFileSync('input.txt', 'utf-8');


//map input to 2Darray
const data: number[][] = input.toString().split('\r\n\r\n').map(e => e.split('\r\n')).map(e => e.map(i => Number(i)));

//sum array values
const sums = data.map(e => e.reduce((a,b) => a+b));

console.log(sums.sort((a,b) => a-b).reverse()[0])

//sum top3 values in array
const top3 = sums.sort((a,b) => a-b).reverse().slice(0,3);

console.log(top3.reduce((a,b) => a+b))