status = "";
input = document.getElementById("object").value;

function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(500, 400);
}

function startRecognition(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = `Detecting Objects`;
}

function modelLoaded(){
    console.log("Model is Loaded");
    status = true;
}

function draw(){
    image(video, 0,0, 500, 400);
}