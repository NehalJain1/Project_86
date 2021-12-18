var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("https://cdn3.vectorstock.com/i/1000x1000/25/42/happy-birthday-background-vector-2622542.jpg",function(Img){
    block_image_object = Img;

    block_image_object.scaleToWidth(700);
    block_image_object.scaleToHeight(550);
    block_image_object.set({
    top:0 ,
   left:0
    });
   
    canvas.add(block_image_object);
})
	
}

function playSound(){
x.play();
}
function stopsound(){
x.pause();
    }
