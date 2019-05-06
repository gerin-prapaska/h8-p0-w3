
// Gerin Prapaska
// HACKTIV8 Batch 32, Fearless Fox
// Phase 0, Week 3
// Exercise 03 : Tantangan Array 2 (Melooping Menggunakan Array)
// ----------------------------------------

// Directions :
// Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. 
// Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n. Contoh input dapat 
// dilihat dibawah:

//contoh input
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

// Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada 
// dari argumen seperti di bawah ini:

// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca

// Nomor ID:  0002
// Nama Lengkap:  Dika Sembiring
// TTL:  Medan 10/10/1992
// Hobi:  Bermain Gitar

// Nomor ID:  0003
// Nama Lengkap:  Winona
// TTL:  Ambon 25/12/1965
// Hobi:  Memasak

// Nomor ID:  0004
// Nama Lengkap:  Bintang Senjaya
// TTL:  Martapura 6/4/1970
// Hobi:  Berkebun

function dataHandling(data){
  var result = ''
  for(var i = 0 ; i < data.length ; i++) {
    var id='', name='', pdob='', hobby=''
    for(var j = 0 ; j < data[i].length ; j++) {
      switch(j){
        case 0: id = data[i][j]; break;
        case 1: name = data[i][j]; break;
        case 2: pdob = data[i][j]; break;
        case 3: hobby = data[i][j]; break;
      }
    }

    result +='Nomor ID : '+id+'\n'+'Nama Lengkap : '+name+'\n'+'TTL : '+pdob+'\n'+'Hobi : '+hobby+'\n\n'

    // console.log('Nomor ID:  '+id)
    // console.log('Nama Lengkap:  '+name)
    // console.log('TTL:  '+pdob)
    // console.log('Hobi:  '+hobby)
  }
  return result
}

console.log(dataHandling(input))