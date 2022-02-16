var gCanvas;
var gCtx;


function init() {
    // renderMeme();
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    // drawImg();
    drawImg2();
}

// todo renders an image on the canvas and a line of text on top
function renderMeme() {
    var meme = getMeme()
    console.log(meme);
    // const strHTML =
//         `
// <img class="img-gallery" src="${img.id}}">
// `
// `<img class="imgtry" src="img/${3}.jpg" alt="" style="display:none;">`

    var img= document.querySelector(`img.${id}`).innerHTML = strHTML
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
}

//git status
//git add .
//git commit -m "sdfghj"
//git status
//git push


function drawImg2(img) {
    console.log('hi', img)
    var img = new Image();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    };
    
    img.src = `img/${5}.jpg`;
    // gCtx.font="40pt Calibri";
    // gCtx.fillText('mmam',20,20);
    // console.log(img.src)

}

function drawImg() {
    var elImg = document.querySelector('.imgtry');
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
}

// function drawText(text = '', fontSize = 20, fontColor = 'white', strokeColor = 'black', align = 'center', font = "ariel", x = gElCanvas.width / 2, y = 20) {
//     gCtx.strokeStyle = strokeColor;
//     gCtx.fillStyle = fontColor;
//     gCtx.font = `${fontSize}px ${font}`;
//     gCtx.textAlign = align;
//     gCtx.fillText(text, x, y);
//     gCtx.strokeText(text, x, y);
// }

function drawText(text, x, y) {
    // gCtx.font = '48px serif';
    // gCtx.fillText(text, x, y);
  
    gCtx.lineWidth = 1;
    gCtx.strokeStyle = 'brown';
    gCtx.fillStyle = 'black';
    gCtx.font = '20px Arial';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
  }

  

  function clearCanvas() {
    if (confirm("are you sure you want to delete?")) {
        gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
    }
}