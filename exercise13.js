// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Exercise 13 : Logic Challenge - Target Terdekat
// ----------------------------------------

// Problem :
// Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari 
// karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
// Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
// Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
// Code

function targetTerdekat(arr) {
  var x = [], o = []
  for (var i = 0 ; i <arr.length ; i ++){
    if (arr[i]==='x') x.push(i)
    else if (arr[i]==='o') o.push(i)
  }

  if(x.length===0||o.length===0) return 0
  else {
    for (var i = 0 ; i < x.length ; i++) {
      for (var j = 0 ; j < o.length ; j++) {
        if (!gap) var gap = Math.abs(x[i]-o[j])
        else if (gap > Math.abs(x[i]-o[j])) gap = Math.abs(x[i]-o[j])
      }
    }
    return gap
  }
}
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

// function targetTerdekat(arr) {
//   // you can only write your code here!
//   var count = 0
//   for (var i = 0 ; i < arr.length ; i++) {
//     if (arr[i]==='x'){
//       count += 1
   
//       //looping mundur
//       var j = i , flag = true
//       while(j>=0 && flag){
//         if (arr[j]==='o') flag = false
//         else j--
//       }
      
//       if (!flag && !x) {
//         var x = i-j //x = minimum distance
//       } else if (!flag && x > i-j) {
//         x = i-j
//       }

//       //looping maju
//       j = i , flag = true
//       while(j < arr.length && flag) {
//         if (arr[j]==='o') flag = false
//         else j ++
//       }

//       if (!flag && !x) {
//         x = j-i //x = minimum distance
//       } else if (!flag && x > j-i) {
//         x = j-i
//       }
//     }
//   }

//   if (count>0) return x
//   else return count
// }