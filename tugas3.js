function tampilData(x=20){ // nilai default atau asli
return x;
}
var nilaiAsli=tampilData();  // memanggil function dan ditampung didalam sebuah variable
console.log(nilaiAsli); // nilai asli sebelum diubah

var show=tampilData(30); // variable yang dikirim ke dalam function
console.log(show);  //nilai yang diubah
