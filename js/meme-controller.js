var gCanvas;
var gCtx;
var gImg;
var  gCurrFont;
var gStartPos
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

//git status
//git add .
//git commit -m "sdfghj"
//git status
//git push


function init() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    renderGallery();
    addMouseListeners();
        // resizeCanvas()

}


function renderMeme(id) {
    var img = document.querySelector(`.img-${id}`)
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
}


function drawText(line) {
    gCtx.font = `${line.size}px ${line.font}`;
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = line.strokeColor;
    gCtx.fillStyle = line.fillColor;
    gCtx.fillText(line.txt, line.location.x, line.location.y);
    gCtx.strokeText(line.txt, line.location.x, line.location.y);
}

// function draw(ev) {
//     const offsetX = ev.offsetX;
//     const offsetY = ev.offsetY;
//     drawText('שלום', offsetX, offsetY);
//     // console.log(offsetX, offsetY)
// }

function onFilter(txt) {
    setFilterBy(txt)
    renderGallery()
}


function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'newCanvas';
}

function uploadImg() {
    const imgDataUrl = gCanvas.toDataURL("image/jpeg");
    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        console.log(encodedUploadedImgUrl);
        document.querySelector('.share-container').innerHTML = `
            <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
               Share   
            </a>`
    }

    doUploadImg(imgDataUrl, onSuccess);
}

function doUploadImg(imgDataUrl, onSuccess) {

    const formData = new FormData();
    formData.append('img', imgDataUrl)

    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.text())
        .then((url) => {
            console.log('Got back live url:', url);
            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
}


function renderEditor(id) {
    gMeme.selectedImgId = id;
    renderCanvas()
}

function renderCanvas() {
    renderMeme(gMeme.selectedImgId);
    document.querySelector('.txt-img').value = gMeme.lines[gMeme.selectedLineIdx].txt;
    gMeme.lines.forEach(line => {
        drawText(line);
    })
}

function btnGallery(id) {
    renderEditor(id);
    gMeme.selectedImgId = id;
    document.querySelector('.Image-Gallery').classList.add('hide');
    document.querySelector('.Meme-Editor').classList.remove('hide');
}

function btnBackToGallery() {
    document.querySelector('.Image-Gallery').classList.remove('hide');
    document.querySelector('.Meme-Editor').classList.add('hide');
}

function onAddTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
    console.log(gMeme.lines[gMeme.selectedLineIdx])
    console.log(gMeme.selectedLineIdx);
        renderCanvas()
}

function addTextLine() {
    gMeme.selectedLineIdx++;
    console.log(gMeme.lines[gMeme.selectedLineIdx])
    renderCanvas()

}

function largerText() {
    gMeme.lines[gMeme.selectedLineIdx].size++;
    renderCanvas()

}

function smallerText() {
    gMeme.lines[gMeme.selectedLineIdx].size--;
    renderCanvas()

}

function alignToLeft() {
    gMeme.lines[gMeme.selectedLineIdx].location.x = 0;
    renderCanvas()
}

function alignToRight() {
    gMeme.lines[gMeme.selectedLineIdx].location.x = gCanvas.width-180;
    renderCanvas()
}


function alignToCenter() {
    gMeme.lines[gMeme.selectedLineIdx].location.x = (
        gCanvas.width/2)-100;
    renderCanvas()
}

function switchLines() {
    if(gMeme.lines[0].location.y ===  560){
        gMeme.lines[0].location.y = 20;
        gMeme.lines[1].location.y =560;
    }else{
        gMeme.lines[0].location.y = 560;
        gMeme.lines[1].location.y =20;
    }
    renderCanvas()
}

function clearCanvas() {
   //change to foreach

//    gMeme.lines.forEach(line => {
//     line[i].txt='';
// })

     gMeme.lines[0].txt='';
     gMeme.lines[1].txt='';
     gMeme.lines[2].txt='';
     gMeme.lines[3].txt='';
     gMeme.lines[4].txt='';
     gMeme.lines[5].txt='';
     gMeme.lines[6].txt='';
    renderCanvas();
}

function setStrokeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = color;
    renderCanvas()
}

function setFillColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].fillColor = color;
    renderCanvas()
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container')
    gCanvas.width = elContainer.offsetWidth - 20
 
  }

  var keywords=['funny','cat','dog']
 function filterText(words){
     return words.filter(function(keyword){
         return gImgs.keyword.includes('dog')
     })

 }

 function onImgInput(ev) {
    loadImageFromInput(ev,renderCanvas2)
}

function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container').innerHTML = ''
    var reader = new FileReader()

    reader.onload = function (event) {
        console.log('onload');
        var img = new Image()
        // Render on canvas
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result
        gImg = img
    }
    console.log('after');
    reader.readAsDataURL(ev.target.files[0])
    // renderCanvas
}

function renderCanvas2(img){
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);  
}

function setFont(font) {
    console.log('font:', font)
    gCurrFont = font;
    gMeme.lines[gMeme.selectedLineIdx].font = font;
    
    
    renderCanvas()
}

function addMouseListeners() {
    gCanvas.addEventListener('mousemove', onMove)
    gCanvas.addEventListener('mousedown', onDown)
    gCanvas.addEventListener('mouseup', onUp)
}

function onDown(ev) {
    const pos = getEvPos(ev);
    console.log('onDown()');

    if (!isTxtClicked(pos)) return;
    setBoxDrag(true);
    gStartPos = pos;
    document.body.style.cursor = 'grabbing';
    renderCanvas();
}

function onMove(ev) {
    console.log('onMove()');
    const txt = getTxtBox();
    if (txt.isDrag) {
        const pos = getEvPos(ev)
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y
        moveTxtBox(dx, dy);
        gStartPos = pos;
        renderCanvas()
    }
}

function onUp() {
    console.log('onUp()');

    setBoxDrag(false)
    document.body.style.cursor = 'grab'

}


function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    return pos
}


function wordsSearch(word) {

    if (word === 'cat') {
        var elCat = document.querySelector('.cat')
        elCat.style.fontSize = '40' + 'px';
        elCat.style.color = 'blue';
    }
    if (word === 'funny') {
        var elFunny = document.querySelector('.funny')
        elFunny.style.fontSize = '40' + 'px';
        elFunny.style.color = 'blue';
    }
    if (word === 'priorities') {
        var elPriorities = document.querySelector('.priorities')
        elPriorities.style.fontSize = '40' + 'px';
        elPriorities.style.color = 'blue';
    }
    if (word === 'ironic') {
        var elIronic = document.querySelector('.ironic')
        elIronic.style.fontSize = '40' + 'px';
        elIronic.style.color = 'blue';
    }
}