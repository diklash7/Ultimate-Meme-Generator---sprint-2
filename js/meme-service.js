'use strict'
var gColor;

var gImgs =
    [
        { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
        { id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] },
        { id: 3, url: 'img/3.jpg', keywords: ['funny', 'cat'] },
        { id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
        { id: 5, url: 'img/5.jpg', keywords: ['funny', 'cat'] },
        { id: 6, url: 'img/6.jpg', keywords: ['funny', 'cat'] },
        { id: 7, url: 'img/7.jpg', keywords: ['funny', 'cat'] },
        { id: 8, url: 'img/8.jpg', keywords: ['funny', 'cat'] },
        { id: 9, url: 'img/9.jpg', keywords: ['funny', 'cat'] }
        // { id: 10, url: 'img/10.jpg', keywords: ['funny', 'cat'] },
        // { id: 11, url: 'img/11.jpg', keywords: ['funny', 'cat'] },
        // { id: 12, url: 'img/12.jpg', keywords: ['funny', 'cat'] },
        // { id: 13, url: 'img/13.jpg', keywords: ['funny', 'cat'] },
        // { id: 14, url: 'img/14.jpg', keywords: ['funny', 'cat'] },
        // { id: 15, url: 'img/15.jpg', keywords: ['funny', 'cat'] },
        // { id: 16, url: 'img/16.jpg', keywords: ['funny', 'cat'] },
        // { id: 17, url: 'img/17.jpg', keywords: ['funny', 'cat'] },
        // { id: 18, url: 'img/18.jpg', keywords: ['funny', 'cat'] },
    ];


var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I want to do meme!!',
        size: 30,
        align: 'left',
        strokeColor: 'black',
        fillColor: 'blue',
        font: 'Ariel',
        location: { x: 100, y: 20 }
    },
    {
        txt: '',
        size: 30,
        align: 'left',
        strokeColor: 'black',
        fillColor: 'blue',
        font: 'Ariel',
        location: { x: 100, y:480 }
    },
    {
        txt: '',
        size: 30,
        align: 'left',
        strokeColor: 'black',
        fillColor: 'blue',
        font: 'Ariel',
        location: { x: 100, y: 250 }
    },
    {
        txt: '',
        size: 30,
        align: 'left',
        strokeColor: 'black',
        fillColor: 'blue',
        font: 'Ariel',
        location: { x: 100, y: 270 }
    },
    {
        txt: '',
        size: 30,
        align: 'left',
        strokeColor: 'black',
        fillColor: 'blue',
        font: 'Ariel',
        location: { x: 100, y: 290 }
    }]
}

function getMeme() {
    var meme = gMeme;
    return meme;
}

function getImgs() {
    var imgs = gImgs;
    return imgs;
}

// function  setLineTxt(txt) 


