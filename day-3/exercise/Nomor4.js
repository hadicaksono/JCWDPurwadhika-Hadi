// Write a code to format number as currency (IDR)
let rupiah = new Intl.NumberFormat('id-ID',{
    style: 'currency',
    currency: 'IDR',
})

let uang = 100000
console.log('Rupiah : '+ rupiah.format(uang))