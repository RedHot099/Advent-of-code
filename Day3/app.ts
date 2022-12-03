import fs from 'fs';

const input:Array<String> = fs.readFileSync("input.txt", 'utf-8').split('\r\n');

//split rucksacks compartments
const data1:Array<String> = input.map(e => e.slice(0,e.length/2));
const data2:Array<String> = input.map(e => e.slice(e.length/2));

//Calculate priority of item
function letter2prio(letter: string){
    if(letter.toLocaleLowerCase() == letter){
        return letter.charCodeAt(0) - 96;
    }
    else{
        return letter.charCodeAt(0) - 96 + 58;
    }
}


let sum1: number = 0;
//find duplicationg items
for (let i = 0; i < input.length; i++){
    for (let a = 0; a < data1[i].length; a++){
        if (data1[i].includes(data2[i][a])){
            sum1 += letter2prio(data2[i][a]);
            break;
        }
    }
}

console.log(sum1);


let sum2:number = 0;
//check trios for duplicate items
for (let i = 0; i < input.length; i += 3){
    for (let b = 0; b < input[i].length; b++){
        if (input[i+1].includes(input[i][b]) && input[i+2].includes(input[i][b])){
            sum2 += letter2prio(input[i][b]);
            break;
        }
    }
}

console.log(sum2);