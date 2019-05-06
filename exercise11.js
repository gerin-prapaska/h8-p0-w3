// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Exercise 11 : Logic Challenge - Tentukan Deret Aritmatika
// ----------------------------------------

// Problem :
// Diberikan sebuah function tentukanDeretAritmatika(arr) yang menerima satu parameter berupa array 
// yang terdiri dari angka. Function tersebut akan mengembalikan true jika array dari parameter tersebut 
// merupakan deret aritmatika. Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret 
// tersebut konsisten. Contoh, [2, 4, 6, 8] adalah deret aritmatika dengan pertambahan nilai sebesar 2, 
// dan [2, 4, 6, 9] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten.
// Code

function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  if (arr.length<2) return 'input invalid'
  else{
    for (var i = 1 ; i < arr.length-1; i++){
      var x = arr[i]-arr[i-1], y = arr[i+1]-arr[i]
      if (x!==y) return false
    }
  }
  return true
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false