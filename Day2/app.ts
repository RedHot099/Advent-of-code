import fs from 'fs';

//Load data
const input:Array<String> = fs.readFileSync('./input.txt', 'utf-8').split('\r\n');

const game: {[key: string]: number} = {'A': 1, 'B': 2, 'C': 3, 'X': 1, 'Y': 2, 'Z': 3};

const test: Array<String> = `A Y
B X
C Z`.split('\n');

//Part One
let sum1: number = 0;

input.forEach(e => {
    sum1 += game[e[2]];
    //game value difference 
    //+3 to avoid negatives
    sum1 += ((game[e[2]] - game[e[0]] + 4)%3)*3;
});

console.log(sum1);

//Part Two
let sum2: number = 0;

input.forEach(e => {
    sum2 += (game[e[2]]-1)*3;
    const pom = (game[e[0]] + game[e[2]] + 1)%3;
    sum2 += pom > 0? pom: 3;
});

console.log(sum2);