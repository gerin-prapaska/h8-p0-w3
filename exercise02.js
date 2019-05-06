// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Phase 0, Week 3
// Exercise 02 : Tantangan Array 1 (Mengakses Nilai dalam Array)
// ----------------------------------------

// Directions :
// Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string dan 
// mengembalikan kebalikannya.

function balikString(string){
  var result =''
  for (var i = string.length-1 ; i >=0; i--) result+=string[i]
  return result
}

console.log(balikString('apaAjaBoleee'))