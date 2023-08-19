// DSA Practice


// 1.  You are given a 2D array(matrix), of N rows and M columns.
// You need to print elements of array as shown in the diagram, on a single line.

//        ^ ^ ^
//        | | |
//        | | |


let mat = [[1, 8, 9],
           [2, 7, 10],
           [3, 6, 11],
           [4, 5, 12]]

N = 4
M = 3


for (let j = 0; j < M; j++) {
  let bag = ""
  for (let i = N - 1; i >= 0; i--) {
    bag = bag + mat[i][j] + " "
  }
  console.log(bag)
}



let bag = ""
for(let j=M-1; j>=0; j--){
  for(let i=N-1; i>=0; i--){
    bag = bag + mat[i][j] + " "
  }
}
console.log(bag)


let bag =""
for(let i=0; i<N; i++){
  for(let j=0; j<M; j++){
    bag = bag + mat[i][j] +" "
  }
}
console.log(bag)


// 2.interchanging all elements execpt diagonal elements

let matt = [ [1,  2,  3,  4],
             [5,  6,  7,  8],
             [9,  10, 11, 12],
             [13, 14, 15, 16] ]

N=4


for(let j=0; j<N; j++){
  let bag = ""
  for(let i=0; i<N; i++){
    bag = bag + matt[i][j] + " "
  }
  console.log(bag)
}


// diagonal elements print

let bag = 0
for(let i=0; i<N; i++){
  bag = bag + matt[i][i] + " "
}
console.log(bag)

for(let i=0; i<N; i++){
  let bag = ""
  for(let j=0; j<N; j++){
    if(i-j==0){
      bag = bag + matt[i][j] + " "
    }
    else bag = bag + "  "
  }
  console.log(bag)
}

for(let i=0; i<N; i++){
  let bag = ""
  for(let j=0; j<N; j++){
    if(i+j==N-1){
      bag = bag + matt[i][j] + " "
    }
    else bag = bag + "  "
  }
  console.log(bag)
}


let matt = [ [1,  2,  3,  4],
             [5,  6,  7,  8],
             [9,  10, 11, 12],
             [13, 14, 15, 16] ]

N=4


print all diagonal elements of K = 12

let K = 12

let r = 0
let c = 0

for(let i=0; i<N; i++){
  for(let j=0; j<N; j++){
    if(matt[i][j] == K){
      r=i
      c=j
    }
  }
}


for(let i=0; i<N; i++){
  let bag = ""
  for(let j=0; j<N; j++){
    if(i-j == r-c){
      bag = bag + matt[i][j] + " "
    }
    else if (i+j == r+c){
      bag = bag + matt[i][j] + " "
    }
    else {
      bag = bag + "* "
    }
  }
  console.log(bag)
}


let matt = [ [1,  2,  3,  4],
             [5,  6,  7,  8],
             [9,  10, 11, 12],
             [13, 14, 15, 16] ]

N=4



// 3. print Z pattern

let bag =""
for(let a=0; a<N; a++){

   bag = bag + matt[0][a] + " "

}

let i=1;
let j= N-2

while(i<N-1 && j>=1){
  bag = bag + matt[i][j] + " "
  i++
  j--
}

for(let a=0; a<N; a++){

   bag = bag + matt[N-1][a] + " "

}
console.log(bag)



let matt = [ [1,  2,  3,  4],
             [5,  6,  7,  8],
             [9,  10, 11, 12],
             [13, 14, 15, 16] ]

N=4



// 4.N pattern 

let bag = ""
for(let i=N-1; i>=0; i--){
  bag = bag + matt[i][0] + " "
}

for(let i=1; i<N-1; i++){
  bag = bag +matt[i][i] + " "
}

for(let i=N-1; i>=0; i--){
  bag = bag + matt[i][N-1] + " "
}
console.log(bag)


let matrix = [[1, 2, 5, 3, 4],
[5, 6, 6, 7, 8],
[9, 10, 8, 11, 12],
[8, 7, 10, 4, 20]
[13, 14, 1, 15, 16]]

N = 5


// dimond pattern  //////////////only for odd matrix/////////////////

let n = Math.floor(N / 2)

let bag = ""
for(let i=n,j=N-1; i>=0 && j>=n; i--,j--){
  bag = bag + mat[i][j] + " "
}

for(let i=1,j=n-1; i<=n && j>=0; i++,j--){
  bag = bag + mat[i][j] + " "
}

for(let i=n+1,j=1; i<N && j<=n; i++,j++){
  bag = bag + mat[i][j] + " "
}

for(let i=N-2,j=n+1; i>=n+1 && j<=N-2; i--,j++){
  bag = bag + mat[i][j] + " "
}

console.log(bag)


