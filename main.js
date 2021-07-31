 Canvas=document.getElementById("myCanvas");
 ctx=canvas.getContext("2d");
 rover_width=100;
 rover_height=90;
 rover_x=100;
 rover_y=200;
 background_image="mars.jpg";
 rover_image="rover.png";
 function add(){
     background_imgTag=new Image();
      img.onload=uploadbackground;
      img.src=background_image;

     rover_imgTag=new Image();
      img.onload=uploadrover;
      img.src=rover_image;
 }
 function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}