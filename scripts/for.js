'use strict';
console.log('for.js');

// for (let i = 0; i <= 10; i++) {
//     console.log('Aš esu for');
// }

// 1. atspausdinti skaicius nuo 14 iki 35

// for (let i = 14; i <= 35; i++) {
//     console.log(i);
    
// }


// 2. atspausdinti skaicius nuo 0 iki 100, kas trecia skaiciu

// for (let i = 0; i < 100; i += 3) {
//     console.log(i);
    
// }

// 3. atspausdinti skaicius nuo 50 iki 24

// for (let i = 50; i >= 24; i--) {
//     console.log(i);
    
// }

// 4. atspausdinti 15 random verciu nuo 1 iki 10
// 4.1 atspausdinti verciu vidurki

// let sum = 0;
// for (let i = 0; i <= 15; i++ ){
    
//     let random = Math.trunc((Math.random() * 10) + 1 );
//     sum = sum + random;
    

// }
// console.log(sum);
// console.log(sum / 15);


// 5. atspausdinti nuo 47 iki 68 visus lyginius skaicius

// for (let i = 47; i <= 68; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }


// 6. sudeti visus skaicius nuo 0 iki 10, atspusdinti rezultata

// let sum = 0;
// for (let i = 0; i <= 10; i++) {
    
//     sum = sum + i;
    
// }
// console.log(sum);

// 7. su while loop. parasyti cikla kuris meta kauliukus ir galimos reiksmes yra nuo 2 iki 12.
// 7.1 kiek kartu kompiuteris mes kauliukus kol ismes 12?


// let i = 2 ;
// let a = 0;
// while (i  !== 12){
//     i = Math.trunc((Math.random() * 12) + 1 );
//     a++;
   
// }
//  console.log(a);

 // 7.2 kiek kartu kompiuteris mes kauliukus kol daugiau nei 6?

// let i = 2 ;
// let a = 0;
// while (i < 6) {
//     i = Math.trunc((Math.random() * 12) + 1 );
//     a++;  
    
// }
// console.log(a);


// 8. Suskaiciuoti kiek skaiciau 4 kartotiniu nuo 0 iki 160


// 9. Surasyti i kintamaji myString visus skaicius nuo -10 iki 35 atskirtus kableliu ir tarpu
// pvz, -10, -9, -8, ....


// 10. Sudeti skaicius nuo 10 iki 20.
// 10.1  sudedant atspausdinti kievieno zingsnio informacija


// 10.2. atspausdinti galutini rezultata


// 11. sukuriam kintamji aukstis = 5. Panaudojus kintamji aukstis nupiesti eglute


// 12. atspausdinti consoleje 3 random reiksmes su 2 skaiciais po kablelio li taguose

//     <li>2.48</li>

//     <li>5.82</li>

//     <li>9.40</li>



// 13. atspausdinti konsoleje skaicius nuo 12 iki 24 padaugintus is 3



// 14. atspausdinti konsoleje skaicius nuo 3 iki 25, jei skaicius lyginis prirasyti prie jo zodeli 'lyginis'
// 14.1 prideti dar prie skaiciu kurie yra 3 kartotiniai 'triju kartotinis'


// užduotis

for (let i = 1; i <= 10; i++) {
    if (i === 2) {
        console.log(`${i} Aš esu antras ciklas`);
        continue;
    }
    if (i === 10) {
        console.log(`${i} Paskutinis ciklas`);
        continue;
    }
    console.log(i);
}