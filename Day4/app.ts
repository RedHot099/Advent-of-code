import fs from 'fs';

//read input into 3D array pair->elf->range
const input:number[][][] = fs.readFileSync('input.txt', 'utf-8')
                            .split('\r\n')
                            .map(e => e.split(',')
                            .map(e => e.split('-')
                            .map(e => Number(e))
                            ));


let sum1:number = 0;
//find pairs where one contains another
input.forEach(e => {
    if ((e[1][0] >= e[0][0] && e[1][1] <= e[0][1])      //...a...x...y...b...
        || (e[1][0] <= e[0][0] && e[1][1] >= e[0][1]))  //...x...a...b...y...
        {
        sum1++;
    }
})

console.log(sum1);


let sum2:number = 0;
//find overlapping pairs
input.forEach(e => {
    const a = e[0][0];
    const b = e[0][1];
    const x = e[1][0];
    const y = e[1][1];
    if ((a <= y && a >= x)      //...x...a...y...
        || (b <= y && b >= x)   //...x...b...y...
        || (x <= b && x >= a)   //...a...x...b...
        || (y <= b && y >= a)   //...a...y...b...
        ) {
        sum2++;
    }
})

console.log(sum2);