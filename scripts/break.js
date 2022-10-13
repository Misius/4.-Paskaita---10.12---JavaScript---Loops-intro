'use strict';
console.log('break.js');

// Break
// continue




// for (let i = 1; i <= 20; i++) {
//     console.log(i);
//     // kada buvo 10 ciklu
//     if (i === 10) {
//         console.log('Jau buvo 10 ciklų');
//         break;
//     }
// }

for (let i = 1; i <= 20; i++) {
    
    if (i === 17 || i === 4 || i === 15) {
        continue;
    }
    console.log(i);
}
