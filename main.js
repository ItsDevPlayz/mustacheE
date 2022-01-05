noseX=0;
noseY=0;
function preload(){
mustache=loadImage("mustache.png");

}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
video=createCapture(VIDEO);
video.size(500,500);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Made");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x-40;
        noseY=results[0].pose.nose.y;
        console.log("nose x = "+noseX);
        console.log("nose y = "+noseY);
    }
}

function draw(){
image(video,0,0,500,500);
image(mustache,noseX,noseY,80,35);
}

function take_snapshot(){
    save("mustache.png");
}
