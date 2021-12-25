var tanya = true 
while ( tanya ) {
    //opening
    alert('Tebak Angka 1-10 \nanda punya kesempatan : 3 kali' );

    // masukan computer
    var comp = Math.random();
    if( comp < 0.1) {
        comp = 1
    } else if (comp >= 0.1 && comp < 0.2) {
        comp = 2 ;
    } else if (comp >= 0.2 && comp < 0.3) {
        comp = 3 ;
    } else if (comp >= 0.3 && comp < 0.4) {
        comp = 4 ;
    } else if (comp >= 0.4 && comp < 0.5) {
        comp = 5 ;
    } else if (comp >= 0.5 && comp < 0.6) {
        comp = 6 ;
    } else if (comp >= 0.6 && comp < 0.7) {
        comp = 7 ;
    } else if (comp >= 0.7 && comp < 0.8) {
        comp = 8 ;
    } else if (comp >= 0.8 && comp < 0.9) {
        comp = 9 ;
    } else {
        comp = 10
    }

    console.log(comp)

    var hasil = ''

    //game
    var angka = parseInt(prompt('tolong masukan angka :'))
    var j = 0
    var i = false
    while (i == false){
        if (angka == comp) {
            alert('jawaban anda benar') ;
            i = true ;
        } else if (angka != comp && j < 2){
            i = false 
            if ( angka < comp) {
                alert('angka terlalu kecil')
            } else {
                alert('angka terlalu besar')
            }
            var angka = parseInt(prompt('masukan angka lagi :'))
            j += 1 
        } else {
            i= true
            alert('anda kalah')
        }
    }
    tanya = confirm('mau mencoba lagi?')
}

alert( 'terima kasih')