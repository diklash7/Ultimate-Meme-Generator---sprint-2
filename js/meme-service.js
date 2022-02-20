'use strict'
var gColor;
var gFilterBy = '';
var gTxtBox;


var gImgs =
    [
        { id: 1, url: 'img/1.jpg', keywords: ['funny',  'politics' ] },
        { id: 2, url: 'img/2.jpg', keywords: ['funny', 'dog', 'pets'] },
        { id: 3, url: 'img/3.jpg', keywords: ['funny', 'dog', 'pets', 'baby'] },
        { id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
        { id: 5, url: 'img/5.jpg', keywords: ['funny', 'baby'] },
        { id: 6, url: 'img/6.jpg', keywords: ['funny'] },
        { id: 7, url: 'img/7.jpg', keywords: ['funny', 'baby'] },
        { id: 8, url: 'img/8.jpg', keywords: ['funny', 'hat'] },
        { id: 9, url: 'img/9.jpg', keywords: ['funny', 'baby'] }
        // { id: 10, url: 'img/10.jpg', keywords: ['funny', 'cat'] },
        // { id: 11, url: 'img/11.jpg', keywords: ['funny', 'cat'] },
        // { id: 12, url: 'img/12.jpg', keywords: ['funny', 'cat'] }
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
        txt: 'I love to do meme!!',
        size: 35,
        align: 'left',
        strokeColor: 'black',
        fillColor: 'white',
        font: 'Ariel',
        location: { x: 100, y: 40 },
        isDrag: false
    },
    {
        txt: '',
        size: 35,
        align: 'left',
        strokeColor: 'black',
        fillColor: 'white',
        font: 'Ariel',
        location: { x: 100, y:580 },
        isDrag: false
    },
    {
        txt: '',
        size: 35,
        align: 'left',
        strokeColor: 'black',
        fillColor: 'white',
        font: 'Ariel',
        location: { x: 100, y: 250 },
        isDrag: false
    },
    {
        txt: '',
        size: 35,
        align: 'left',
        strokeColor: 'black',
        fillColor: 'white',
        font: 'Ariel',
        location: { x: 100, y: 270 },
        isDrag: false
    },
    {
        txt: '',
        size: 35,
        align: 'left',
        strokeColor: 'black',
        fillColor: 'white',
        font: 'Ariel',
        location: { x: 100, y: 290 },
        isDrag: false
    }]
}

function setFilterBy(txt) {
    gFilterBy = txt
}

function getMeme() {
    var meme = gMeme;
    return meme;
}

function getImgs() {
    if (!gFilterBy) return gImgs;
    return gImgs.filter(img => {
        return img.keywords.includes(gFilterBy)
    })
}

// function  setLineTxt(txt) 



function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    return pos
}

function setBoxDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}

function moveTxtBox(dx, dy) {
    gMeme.lines[gMeme.selectedLineIdx].location.x += dx
    gMeme.lines[gMeme.selectedLineIdx].location.y += dy
}

function getTxtBox() {
    return gMeme.lines[gMeme.selectedLineIdx];
}

function isTxtClicked(txtPos) {
    var res
    gMeme.lines.forEach((line, idx) => {
        const pos = line.location;
        var text = line.txt;
        const distance = gCtx.measureText(text);
        var distanceTxt = distance.width;
        var sizeTxt = line.size;
        if (txtPos.x <= (distanceTxt + pos.x) && txtPos.x >= pos.x && txtPos.y <= pos.y && txtPos.y >= (pos.y - (sizeTxt / 2))) {
            gMeme.selectedLineIdx = idx
            res = (txtPos.x <= (distanceTxt + pos.x) && txtPos.x >= pos.x && txtPos.y <= pos.y && txtPos.y >= (pos.y - (sizeTxt / 2)));
        }

    })
    return res;

}

// function isBoxClicked(clickedPos) {
//     const { pos } = gTxtBox
//     const distance = Math.sqrt((pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2)
//     return distance <= gTxtBox.size
// }