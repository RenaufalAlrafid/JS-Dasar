var item = prompt('masukan nama makanan atau minuman : \n (daging , susu , humberger ,softdrink, nasi)')

switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('makananan sehat')
        break;
    case 'humberger':
    case 'softdrink':
        alert('makananan tidak sehat')
        break;
    default:
        alert('makanan salah')
        break;
}