var albums = document.getElementsByClassName('album');
var audio = document.getElementById('musica');
var play = document.getElementsByClassName('play')[0].addEventListener('click',iniciarMusica);
var imagenPrincipla=document.getElementById('imagenPrincipal');

window.addEventListener("load",seleccionarImg);

for(var i=0;i<albums.length;i++){
    albums[i].addEventListener("click", seleccionarAlbum);
}

function seleccionarAlbum(){
   imagenPrincipla.src=this.getElementsByTagName("img")[0].src;
   imagenPrincipla.alt=this.getElementsByTagName("img")[0].alt;
   console.log(imagenPrincipla.src);
    console.log(this.getElementsByTagName("img")[0].src);
}


function iniciarMusica(){
    audio.src=imagenPrincipla.alt;
    console.log(imagenPrincipla.alt);
}

function seleccionarImg(){
    console.log("HOLA");
    imagenPrincipla.src=albums[0].src;
    imagenPrincipla.alt=albums[0].alt;
}
