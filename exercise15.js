// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Exercise 15 : Logic Challenge - Mengelompokkan Hewan
// ----------------------------------------

// Problem :
// Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. 
// Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang 
// dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, 
// anggap saja semua text lowercase.

// Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

// maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

// Urutan hewan dalam array setiap pengelompokan huruf tidak penting.
// Code

function groupAnimals(animals) {
  // you can only write your code here!

  //loop for unique
  var unique = []
  for (var i = 0 ; i < animals.length ; i++) {
    if (i<1) unique.push(animals[i][0]) //if(unique.length<1)
    else {
      var flag = true
      for (var j = 0 ; j < unique.length ; j++) {
      if (animals[i][0]===unique[j]) flag = false
      }
      if (flag) unique.push(animals[i][0])
    }
  }

  //loop to sort unique
  for (var i = 0 ; i < unique.length ; i ++) {
    for (var j = 0 ; j < unique.length-i ; j++) {
      if (unique[j]>unique[j+1]){
        temp = unique[j]
        unique[j] = unique[j+1]
        unique[j+1] = temp
      }
    }
  }
  
  var result = []
  for (var i = 0 ; i < unique.length ; i++) {
    temp = []
    for (var j = 0 ; j < animals.length ; j++){
      if (animals[j][0]===unique[i]) temp.push(animals[j])
    }
    result.push(temp)
  }

  console.log(animals)
  console.log(unique)
  return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]