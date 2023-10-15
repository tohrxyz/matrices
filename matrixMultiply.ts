const timeStart = process.hrtime.bigint();
const args = process.argv.slice(2);

const a = 
  [
    [parseFloat(args[0]), parseFloat(args[1])],
    [parseFloat(args[2]), parseFloat(args[3])]
  ];
const b = 
  [
    [parseFloat(args[4]), parseFloat(args[5])],
    [parseFloat(args[6]), parseFloat(args[7])]
  ]

console.log("first matrix: ", a);
console.log("second matrix: ", b);

console.log("\n");

/* 
  0,0 * 0,0
  0,1 * 1,0

  0,0 * 0,1
  0,1 * 1,1

  1,0 * 0,0
  1,1 * 1,0

  1,0 * 0,1
  1,1 * 1,1
*/

const metaNums: number[] = [];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    const res = a[i][j] * b[j][i]
    metaNums.push(res);
  }
}

const multipliedMatrix: number[][] = 
  [
    [metaNums[0] + metaNums[1]], 
    [(a[0][0] * b[0][1]) + (a[0][1] * b[1][1])], 
    [(a[1][0] * b[0][0]) + (a[1][1] * b[1][0])], 
    [metaNums[2] + metaNums[3]]
  ];
const timeEnd = process.hrtime.bigint();
const timeDiff = timeEnd - timeStart;
console.log("multiplied matrix: ", multipliedMatrix)
console.log(`in ${timeDiff} nanoseconds (~${timeDiff / BigInt(1000000)} milliseconds)`);