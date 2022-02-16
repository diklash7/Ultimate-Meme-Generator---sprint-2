'use strict';

renderGallery();

function renderGallery() {
    var imgs = getImgs();
    var strHTMLs = imgs.map((img) => {
        return `
<img onclick="drawImg2(${img.id})" class="img-${img.id}" src="${img.url}">
`
    })
    var elgallery = document.querySelector('.gallery');
    elgallery.innerHTML = strHTMLs.join('');
    // console.log(strHTMLs)
}
