'use strict';

renderGallery();

function renderGallery() {
    var imgs = getImgs();
    var strHTMLs = imgs.map((img) => {
        return `
<img onclick="btnGallery(${img.id})" class="img-${img.id}" src="${img.url}">
`
    })
    var elgallery = document.querySelector('.gallery');
    elgallery.innerHTML = strHTMLs.join('');
    // console.log(strHTMLs)
}


function onSetLang(lang) {
    setLang(lang);
    if (lang === 'he') document.body.classList.add('rtl')
    else document.body.classList.remove('rtl')
    doTrans();
    renderGallery();
}