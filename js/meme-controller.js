var gCanvas;
var gCtx;

//git status
//git add .
//git commit -m "sdfghj"
//git status
//git push


function init() {
    renderGallery();
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    // resizeCanvas()
}


function renderMeme(id) {
    var img = document.querySelector(`.img-${id}`)
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
}


function drawText(line) {
    gCtx.font = `${line.size}px ${line.font}`;;
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
    if(gMeme.lines[0].location.y = gCanvas.height){
        gMeme.lines[0].location.y = 20;
        gMeme.lines[1].location.y =gCanvas.height;
    }else{
        gMeme.lines[0].location.y = gCanvas.height;
        gMeme.lines[1].location.y =20;
    }
    renderCanvas()
}

function clearCanvas() {
    gMeme.selectedLineIdx--;
    // gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
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