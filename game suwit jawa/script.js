var tanya = true 
while ( tanya ) {
// menangkap player 

var p = prompt('pilih : gajah , semut , atau orang');



// menangkap komputer
// menggenerate bilangan random
var comp = Math.random();
if( comp < 0.34) {
    comp = 'gajah'
} else if (comp >= 0.34 && comp < 0.67) {
    comp = 'orang' ;
} else {
    comp = 'semut'
}
var hasil = ''
// menentukan rules

if (p === comp){
    hasil = 'Seri';
} else if ( p == 'gajah') {
    // if( comp == 'orang') {
    //     hasil = 'menang';
    // }
    // else{
    //     hasil = 'kalah'
    // }
    hasil = (comp == 'orang') ? 'Menang' : 'Kalah';
} else if ( p == 'orang' ) {
    hasil = (comp == 'gajah') ? 'Kalah' : 'Menang';
} else if ( p == 'semut' ) {
    hasil = (comp == 'orang') ? 'Kalah' : 'Menang';
} else {
    hasil = 'masukan salah'
}

//tampilkan hasilnya

alert(` kamu memilih : ${p} dan komputer memilih ${comp}\n maka hasilnya kamu ${hasil}` )
tanya = confirm('lagi?')
}

alert( 'terima kasih')