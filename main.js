noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,120);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#5ecbdb');
    document.getElementById("square_side").innerHTML="Width and height of a square will be"+difference+"px";
    fill('#14d1f7');
    stroke('#14d1f7');
    square(noseX,noseY,difference);
}

function modelLoaded(){
    console.log('poseNet is intialized.');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nosex="+noseX+"nosey="+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristx="+leftWristX+"rightWristx="+rightWristX+"difference="+difference);
    }
}
