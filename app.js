const canvas = document.getElementById("jsCanvas");

function noMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  console.log(x, y);
}

if(canvas){
  canvas.addEventListener("mousemove", noMouseMove);
}