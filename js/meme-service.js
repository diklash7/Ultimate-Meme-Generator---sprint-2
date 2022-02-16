'use strict'

var gImgs =
    [{
        id: 1,
        url: 'img/1.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 2,
        url: 'img/2.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 3,
        url: 'img/3.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 4,
        url: 'img/4.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 5,
        url: 'img/5.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 6,
        url: 'img/6.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 7,
        url: 'img/7.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 8,
        url: 'img/8.jpg',
        keywords: ['funny', 'cat']
    }
];

var gMeme =
{
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I sometimes eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
    }
    ]
}


function getMeme(){
    var meme=gMeme;
    return meme;
}

function getImgs(){
    var imgs=gImgs;
    return imgs;
}

function  setLineTxt(txt) {
    document.querySelector('.canvas-container').innerText = txt
}
// setLineTxt()