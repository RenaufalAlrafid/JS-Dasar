var jmla = 10;

var angkotberoperasi = 6;

for(var noangkot = 1; noangkot <= jmla; noangkot++) {
    
    if(noangkot <= 6 && noangkot !== 5) {
        console.log(`Angkot No. ${noangkot} beroprasi dengan baik.`);
    } else if(noangkot === 8 || noangkot === 10 || noangkot === 5){
        console.log(`Angkot No. ${noangkot} sedang lembur.`);
    } else{
        console.log(`Angkot No. ${noangkot} sedang tidak beroprasi.`);
    }

}