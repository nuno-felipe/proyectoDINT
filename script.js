var albums = document.getElementsByClassName('album');
var audio = document.getElementById('musica');
var play = document.getElementsByClassName('play')[0].addEventListener('click',iniciarMusica);
var rep = document.getElementById('rep');
var imagenPrincipla=document.getElementById('imagenPrincipal');
var bProg=document.getElementById("bProg");
var boton = document.getElementsByClassName('fas fa-play')[0];
window.addEventListener("load",seleccionarImg);
window.addEventListener("DOMContentLoaded",barraProg);



for(var i=0;i<albums.length;i++){
    albums[i].addEventListener("click", seleccionarAlbum);
}

function seleccionarAlbum(){
   imagenPrincipla.src=this.getElementsByTagName("img")[0].src;
   imagenPrincipla.alt=this.getElementsByTagName("img")[0].alt;
   boton.className="fas fa-play";
   audios.pause();
   audios.currentTime=0;
   audios=new Audio("audios/"+imagenPrincipla.alt);
   audios.addEventListener('play',barraProg,false);
}
function barraProg(){
    setInterval(function(){
    bProg.value = Math.round((audios.currentTime / audios.duration) * 100);
    })
}
function seleccionarImg(){
    console.log("HOLA");
    imagenPrincipla.src=albums[0].getElementsByTagName("img")[0].src;
    imagenPrincipla.alt=albums[0].getElementsByTagName("img")[0].alt;
    audios=new Audio("audios/"+imagenPrincipla.alt);
}

function iniciarMusica(){    
    if(!audios.paused){
        audios.pause();
        boton.className="fas fa-play";
        
    }else{
        audios.play();
        boton.className="fas fa-pause";
    }
}