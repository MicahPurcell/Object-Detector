function setup(){

canvas = createCanvas(600,400)
canvas.center()
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects"
}

function modelLoaded(){
    console.log("Model Loaded")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if (error) {
        console.log(error)
    }
    else{
    console.log(results)
    objects = results
}
}

img = "";
status = "";
objects = [];

function preload(){
    img = loadImage('plane.jpg')
}

function draw(){
    image(img, 0, 0, 600, 400)
     
    if (status != "") {
        for (let i = 0; i < objects.length; i++) {
       
document.getElementById("status").innerHTML = "Status : Object Detected";

fill('red')
percent = floor(objects[i].confidence * 100)
    text(objects[i].label + " " + percent + "%" , objects[i].x, objects[i].y);
    noFill()
    stroke('red')
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }

}