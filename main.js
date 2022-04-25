Nosex=0;
NoseY=0;
difference=0;
rightwristX=0;
leftwristx=0;

function setup(){
    Canvas=createCanvas(550,550);
    video=createCapture(VIDEO);
    video.size(550,550);
    Canvas.position(600,250);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        Nosex = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("Nose x -" + Nosex + "nose y -" + NoseY);
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(leftwristx - rightwristx);
        console.log("left wist x -" + leftwristx + "right wrist X -" + rightwristx + "difference = " + difference);
    }
}

function modelLoaded(){
    console.log("posenet is loaded");
}
function draw(){
    background('green');
    document.getElementById("square_heightwidth").innerHTML="The width and height of the square will be " + difference + " pixels";
    fill('brown');
    stroke('dark green');
    square(NoseY, NoseY, difference);
}
