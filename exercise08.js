// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Exercise 08 : Logic Challenge - Pasangan Angka Terbesar
// ----------------------------------------

// Problem :
// Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. Functiona akan 
// menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. Contoh, jika angka 
// adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang 
// lainnya.
// Code

function pasanganTerbesar(num) {
  // you can only write your code here!

  // cara 1
  // var str=num.toString(), max = 0
  // for (var i = 0 ; i < str.length-1 ; i++) {
  //   if (max < Number(str[i]+str[i+1])) max = Number(str[i] + str[i+1])
  // }

  // cara 2
  var max = 0
  while (num>9){
    if (num%100 > max) max = num%100
    num = Math.floor(num/10)
  }
  return max
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99