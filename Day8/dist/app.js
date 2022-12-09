import fs from "fs";
const input = fs.readFileSync("input.txt", "utf8")
    .split("\r\n")
    .map(e => [...e])
    .map(i => i
    .map(j => Number(j)));
function isCovered(arr, x, y) {
    if (x == 0 || y == 0 || x == arr.length - 1 || y == arr[x].length - 1)
        return false;
    let covered = false;
    for (let i = 0; i < x; i++) {
        covered = arr[x][y] <= arr[i][y];
        if (covered)
            break;
    }
    if (!covered)
        return false;
    for (let i = x + 1; i < arr.length; i++) {
        covered = arr[x][y] <= arr[i][y];
        if (covered)
            break;
    }
    if (!covered)
        return false;
    for (let i = 0; i < y; i++) {
        covered = arr[x][y] <= arr[x][i];
        if (covered)
            break;
    }
    if (!covered)
        return false;
    for (let i = y + 1; i < arr.length; i++) {
        covered = arr[x][y] <= arr[x][i];
        if (covered)
            break;
    }
    return covered;
}
let ans1 = 0;
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        let covered = isCovered(input, i, j);
        covered ? null : ans1++;
    }
}
console.log(ans1);
function viewScore(arr, y, x) {
    if (x == 0 || y == 0 || y == arr.length - 1 || x == arr[y].length - 1)
        return 0;
    let score = 1;
    let part_score = 0;
    for (let i = y - 1; i >= 0; i--) {
        part_score++;
        if (arr[y][x] <= arr[i][x])
            break;
    }
    score *= part_score;
    part_score = 0;
    for (let i = x - 1; i >= 0; i--) {
        part_score++;
        if (arr[y][x] <= arr[y][i])
            break;
    }
    score *= part_score;
    part_score = 0;
    for (let i = y + 1; i < arr.length; i++) {
        part_score++;
        if (arr[y][x] <= arr[i][x])
            break;
    }
    score *= part_score;
    part_score = 0;
    for (let i = x + 1; i < arr[y].length; i++) {
        part_score++;
        if (arr[y][x] <= arr[y][i])
            break;
    }
    score *= part_score;
    return score;
}
let ans2 = 0;
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        let covered = isCovered(input, i, j);
        if (!covered) {
            const score = viewScore(input, i, j);
            score > ans2 ? ans2 = score : null;
        }
    }
}
console.log(ans2);
//# sourceMappingURL=app.js.map