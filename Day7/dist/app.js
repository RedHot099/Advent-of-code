import fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8").split("\r\n");
let dir = [];
let arr1 = {};
input.forEach(e => {
    if (e.split(" ")[0] == "$" && e.split(" ")[1] == "cd") {
        e.split(" ")[2] == ".." ? dir.pop() : dir.push(e.split(" ")[2]);
    }
    if (!isNaN(parseInt(e))) {
        for (let i = 0; i < dir.length; i++) {
            let sub_dir = '';
            for (let j = 0; j <= i; j++)
                sub_dir += dir[j];
            arr1[sub_dir] ? arr1[sub_dir] += Number(e.split(" ")[0]) : arr1[sub_dir] = Number(e.split(" ")[0]);
        }
    }
});
let ans1 = 0;
for (let key in arr1) {
    arr1[key] <= 100000 ? ans1 += arr1[key] : null;
}
console.log(ans1);
let ans2 = arr1["/"];
for (let key in arr1) {
    ((70000000 - 30000000 - arr1["/"] + arr1[key]) > 0) && (arr1[key] < ans2) ? ans2 = arr1[key] : null;
}
console.log(ans2);
//# sourceMappingURL=app.js.map