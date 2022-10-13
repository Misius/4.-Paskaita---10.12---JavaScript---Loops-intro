'use strict';
console.log('genHtml.js');

const listEl = document.getElementById('list');
let htmlString = '';
let i = 1;
while (i < 11) {
    // console.log(`<li>Item ${i}</li>`);
    htmlString = htmlString + `<li>Item ${i}</li>\n`
    i++;
}
console.log('htmlString ===', htmlString);
listEl.innerHTML = htmlString;