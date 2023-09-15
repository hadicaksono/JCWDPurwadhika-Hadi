function iniMenu(Menu){
// const value1=parseInt(prompt('Masukkan angka pertama : '))
// const value2= parseInt(prompt('Masukkan angka kedua : '))
let pilihanMenu= prompt(`Pilih Menu:
        1. Penjumlahan
        2. Pengurangan
        3. Pembagian
        4. Perkalian
        5. Pangkat 2
        6. Akar Pangkat 2
        7. Akar Pangkat 3`)
        // let result=0
        switch(pilihanMenu){
            case '1':
                const value1=parseInt(prompt('Masukkan angka pertama : '))
                const value2= parseInt(prompt('Masukkan angka kedua : '))
                result=value1+value2
                alert(`${value1} + ${value2} = ${result}`)
                const con1 = confirm('try again?')
                if(con1==true){
                    iniMenu()
                }
                break
            case '2':
                const value3=parseInt(prompt('Masukkan angka pertama : '))
                const value4= parseInt(prompt('Masukkan angka kedua : '))              
                result=value3-value4
                alert(`${value3} - ${value4} = ${result}`)
                const con2 = confirm('try again?')
                if(con2==true){
                    iniMenu()
                }
                break
            case '3':
                const value5=parseInt(prompt('Masukkan angka pertama : '))
                const value6= parseInt(prompt('Masukkan angka kedua : '))  
                result=value5/value6
                alert(`${valu51} / ${value6} = ${result}`)
                const con3 = confirm('try again?')
                if(con3==true){
                    iniMenu()
                }
                break
            case '4':
                const value7=parseInt(prompt('Masukkan angka pertama : '))
                const value8= parseInt(prompt('Masukkan angka kedua : '))               
                result=value7*value8
                alert(`${value7} X ${value8} = ${result}`)
                const con4 = confirm('try again?')
                if(con4==true){
                    iniMenu()
                }
                break
            case '5':
                const value9=parseInt(prompt('Masukkan angka pertama : '))
                const value10= parseInt(prompt('Masukkan angka kedua : '))               
                result1=value9**2
                result2=value10**2
                alert(`Pangkat 2 dari ${value9} adalah ${result1} dan Pangkat 2 dari ${value10} adalah ${result2}`)
                const con5 = confirm('try again?')
                if(con5==true){
                    iniMenu()
                }
                break
            case '6':
                const value11=parseInt(prompt('Masukkan angka pertama : '))
                const value12= parseInt(prompt('Masukkan angka kedua : '))     
                result1=Math.sqrt(value11)
                result2=Math.sqrt(value12)
                alert(`Akar 2 dari ${value11} adalah ${result1} dan Akar 2 dari ${value12} adalah ${result2}`)
                const con6 = confirm('try again?')
                if(con6==true){
                    iniMenu()
                }
                break
            case '7':
                const value13=parseInt(prompt('Masukkan angka pertama : '))
                const value14= parseInt(prompt('Masukkan angka kedua : '))              
                result1=Math.cbrt(value13)
                result2=Math.cbrt(value14)
                alert(`Akar 3 dari ${value13} adalah ${result1} dan Akar 3 dari ${value14} adalah ${result2}`)
                const con7 = confirm('try again?')
                if(con7==true){
                    iniMenu()
                }
                break
            default:
                const con = confirm('tidak ada pilihan, kembali ke input?')
                if(con==true){
                    iniMenu()
                }
        }
    }
    iniMenu()