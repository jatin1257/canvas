var canvas=document.querySelector("canvas");
const context=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


context.lineCap='round';
context.lineJoin='round';

let isdrawing=false;
let lastX=0;
let lastY=0;
let hue=0;

canvas.addEventListener("mousedown",function(event){
    isdrawing=true;
    [lastX,lastY]=[event.clientX,event.clientY];

});
canvas.addEventListener("mouseup",function(){
    isdrawing=false
    lastX=0;
    lastY=0;
});
canvas.addEventListener("mouseout",function(){ [lastX,lastY]=[event.clientX,event.clientY];});
canvas.addEventListener("mousemove",function(event)
{
    if(isdrawing)
    {
        context.strokeStyle=`hsl(${hue},100%,50%)`;
        context.lineWidth=hue/2;
        context.beginPath();
        context.moveTo(lastX,lastY);
        context.lineTo(event.clientX,event.clientY);
        context.stroke();
        [lastX,lastY]=[event.clientX,event.clientY];
        hue++;
        if(hue>=360)hue=0;

    }
    
    

});
