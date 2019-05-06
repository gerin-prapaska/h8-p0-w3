// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Exercise 07 : Logic Challenge - Menghitung Jumlah Kata
// ----------------------------------------

// Problem :
// Diberikan sebuah function hitungJumlahKata(kalimat) yang menerima parameter berupa string yang merupakan 
// sebuah kalimat. Function akan mengembalikan jumlah kata dari kalimat tersebut. Contoh, "I have a dream" 
// akan menghasilkan nilai 4, karena memiliki 4 kata.
// Code

function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  var flag = false, count = 0
  for(var i = 0 ; i < kalimat.length; i++){
    if (kalimat[i]===' ') {
      if (flag) {
        flag = false
        count +=1
      }
    } else {
      if (i === kalimat.length-1) count +=1
      else flag = true
    }
  } return count
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
