const ar = process.argv;
// ar.slice(2);

let sm = 0;
ar.slice(2).map((x) => +x).map((y) => sm += y);
console.log(sm);