import fs from 'fs';

//read input
const input = fs.readFileSync('input.txt', 'utf-8');


//map input to 2Darray
const data: number[][] = input.toString().split('\r\n\r\n').map(e => e.split('\r\n')).map(e => e.map(i => Number(i)));

//sum array values
const sums = data.map(e => e.reduce((a,b) => a+b));

export const top_sum: number = sums.sort((a,b) => a-b).reverse()[0];

// console.log(top_sum);

//sum top3 values in array
export const top3 = sums.sort((a,b) => a-b).reverse().slice(0,3).reduce((a,b) => a+b);

// console.log(top3);


import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) =>
    res.json({top_sum: top_sum, top3_sums: top3})
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );