img = "";
status = "";
object = [];
function preload(){
    img = loadImage('dog_cat.jpg');
}
function setup(){
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Object";
}
function draw(){
    image(img , 0 , 0 , 640 , 420);
    /*fill('#0373fc');
    text("Dog" , 45 , 75);
    noFill();
    stroke('#0373fc');
    rect(30 , 60 , 450 , 350);
    
    fill('#03fc62');
    text("Cat" , 340 , 100);
    noFill();
    stroke('#03fc62');
    rect(300 , 80 , 450 , 350);*/
     if( status!=""){
        for(i = 0; i < object.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
            fill('#0373fc');
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%" , object[i].x + 20, object[i].y + 20);
noFill();
stroke('#03fc62');
rect(object[i].x , object[i].y , object[i].width , object[i].height);
        }
     }

     
}
function modelLoaded(){
    console.log("CocoSSD is Initalised");
    status = true;
    objectDetector.detect(img , gotResult);
}

function gotResult(error , results){
    if(error){
        console.log(error);
    }
    console.log(results);
    object = results;
}