let border="2px"
let figsize="40px"

document.getElementsByTagName("canvas")[0].style.border="solid black 6px";

const SetFigSize = (size) => {
    figsize = size;
}
const SetMargin = (size) => {
    border = size;
}

const SetFigType = (type) =>{
    document.getElementById("figtype").innerText=type;
}

const Draw = () => {
    if(document.getElementById("figtype").innerText==="Triangle"){
        DrawTriangle()
    }else if(document.getElementById("figtype").innerText==="Square"){
        DrawSquare();
    }else{
        DrawCircle();
    }
}

const DrawSquare = () => {
    console.log("coucou1")
    const canvas = document.getElementById('myCanvas')
    const c = canvas.getContext('2d');
    c.beginPath();
    c.strokeStyle = document.getElementsByTagName("input")[1].value;
    c.fillStyle = document.getElementsByTagName("input")[0].value;
    c.lineWidth = parseInt(border.slice(0,-2))
    console.log(c.strokeStyle)
    const intercept = getRandomStart(canvas.width, canvas.height)
    const fig = parseInt(figsize.slice(0,-2))
    c.rect(intercept[0],intercept[1],fig,fig)
    c.stroke();
    c.fill();
}

const DrawCircle = () => {
    console.log("coucou2")
    const canvas = document.getElementById('myCanvas')
    const c = canvas.getContext('2d')
    c.beginPath();
    c.strokeStyle = document.getElementsByTagName("input")[1].value;
    c.fillStyle = document.getElementsByTagName("input")[0].value;
    c.lineWidth = parseInt(border.slice(0,-2))
    console.log(c.strokeStyle)
    const intercept = getRandomStart(canvas.width, canvas.height)
    const fig = parseInt(figsize.slice(0,-2))
    c.arc(intercept[0],intercept[1],fig/2,0, Math.PI*2)
    c.stroke();
    c.fill();
}
const DrawTriangle = () => {
    console.log("coucou3")
    const canvas = document.getElementById('myCanvas')
    const c = canvas.getContext('2d')
    c.beginPath();
    c.strokeStyle = document.getElementsByTagName("input")[1].value;
    c.fillStyle = document.getElementsByTagName("input")[0].value;
    c.lineWidth = parseInt(border.slice(0,-2))
    console.log(c.strokeStyle)
    const intercept = getRandomStart(canvas.width, canvas.height)
    const fig = parseInt(figsize.slice(0,-2))
    c.beginPath();
    c.moveTo(intercept[0], intercept[1]);
    c.lineTo(intercept[0], intercept[1]+(fig/2));
    c.lineTo(intercept[0]+fig, intercept[1]+fig);
    c.closePath();

    c.stroke();
    c.fill();

  
}


const getRandomStart = (width, height) => {
    const swidth = width-parseInt(figsize.slice(0,-2));
    const sheight = height-parseInt(figsize.slice(0,-2));
    return[Math.floor(swidth*Math.random()),Math.floor(sheight*Math.random())]
}

