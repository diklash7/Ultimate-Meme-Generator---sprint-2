var gCanvas;
var gCtx;
// var gColor;

//git status
//git add .
//git commit -m "sdfghj"
//git status
//git push


function init() {
    renderGallery();
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
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

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        console.log(encodedUploadedImgUrl);
        // document.querySelector('.user-msg').innerText = `Your photo is available here: ${uploadedImgUrl}`

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

function onAddTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
    renderCanvas()
}

function addTextLine(){
    gMeme.selectedLineIdx++;
    renderCanvas()

}

function largerText(){
    gMeme.lines[gMeme.selectedLineIdx].size++;
    renderCanvas()

}

function smallerText(){
    gMeme.lines[gMeme.selectedLineIdx].size--;
    // renderMeme()
    renderCanvas()

}

function alignToLeft(){
    gMeme.lines[gMeme.selectedLineIdx].location.x=50;
}

function switchLines(){
    gMeme.lines[gMeme.selectedLineIdx].location.y=gMeme.lines[gMeme.selectedLineIdx+1].location.y
    renderCanvas()
}

function clearCanvas() {
    // if (confirm("are you sure you want to delete?")) {
    //     gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
    // }
    gMeme.selectedLineIdx--;
    renderCanvas()
}

function setStrokeColor(color) {
    // console.log('color:', color)
    // gColor = color;
    gMeme.lines[gMeme.selectedLineIdx].strokeColor=color;
    renderCanvas()
    // document.querySelector('.canvas').style.background = color
}

function setFillColor(color) {
    // console.log('color:', color)
    // gColor = color;
    gMeme.lines[gMeme.selectedLineIdx].fillColor=color;
    renderCanvas()
    // document.querySelector('.canvas').style.background = color
}