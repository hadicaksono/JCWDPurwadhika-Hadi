/**
 1. buat function konversi ke tamplate phonenumber(xxx-xxx-xxx)
 example -> '1234567890' = '123-456-7890'

 */

 function konversiNo(s){
   const p=s.replace(/\D/g, '')

    if(p.length!=10){
        return 'Nomor telpon tidak ditemukan'
    }
    const template= `(${p.slice(0,3)})-${p.slice(3,6)}-${p.slice(6)} `
    return template
 }

 const input='1234567890'
 console.log(konversiNo(input)); 