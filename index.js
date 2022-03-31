function buttonClicked(){
  document.getElementById('button-1').classList.toggle('is-red');
}

function buttonHovered(){
  document.getElementById('button-2').classList.toggle('is-blue');
}

function windowLoaded(){
  document.getElementById('button-1').addEventListener('click',buttonClicked);
  document.getElementById('button-2').addEventListener('mouseover',buttonHovered);
}


window.onload = windowLoaded;
