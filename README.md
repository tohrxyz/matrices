# matrices
Hobby educational implementation of matrix operations in TypeScript (I was bored and curious)

# How to use
Install node modules
```sh
$ npm install
```

## Matrix Multiplication
To use matrix multiplication program, you need to pass numbers through CLI arguments.

Currently only `2x2 * 2x2` is supported.

```sh
$ npx ts-node matrixMultiply.ts 23 42 54 23 51 95 23 58
```
This is equivalent of two matrices as follows:

`matrix 1` = 
 [23, 42],
 [54, 23]

`matrix 2` =
 [51, 96],
 [23, 58]

### Example output
```sh
first matrix:  [ [ 23, 42 ], [ 54, 23 ] ]
second matrix:  [ [ 51, 95 ], [ 23, 58 ] ]


multiplied matrix:  [ [ 2139 ], [ 4621 ], [ 3283 ], [ 6464 ] ]
in 1180167 nanoseconds (~1 milliseconds)
```
