var albums = document.getElementsByClassName('album');
var audio = document.getElementById('musica');
var play = document.getElementsByClassName('play')[0].addEventListener('click',iniciarMusica);
var rep = document.getElementById('rep');
var imagenPrincipla=document.getElementById('imagenPrincipal');
var bProg=document.getElementById("bProg");
var boton = document.getElementsByClassName('fas fa-play')[0];




//AddEventListeners
window.addEventListener("load",seleccionarImg);
window.addEventListener("DOMContentLoaded",barraProg);
/*scrollSpy*/
document.addEventListener('DOMContentLoaded', function(){ 
    const sections = document.querySelectorAll(".anchor");
    const menu_links = document.querySelectorAll(".nav_list");
    // functions to add and remove the active class from links as appropriate
    const makeActive = (link) => menu_links[link].classList.add("active");
    const removeActive = (link) => menu_links[link].classList.remove("active");
    const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));
    // change the active link a bit above the actual section
    // this way it will change as you're approaching the section rather
    // than waiting until the section has passed the top of the screen
    const sectionMargin = 95;
    // keep track of the currently active link
    // use this so as not to change the active link over and over
    // as the user scrolls but rather only change when it becomes
    // necessary because the user is in a new section of the page
    let currentActive = 0;
    // listen for scroll events
    window.addEventListener("scroll", () => {
      
      // check in reverse order so we find the last section
      // that's present - checking in non-reverse order would
      // report true for all sections up to and including
      // the section currently in view
      //
      // Data in play:
      // window.scrollY    - is the current vertical position of the window
      // sections          - is a list of the dom nodes of the sections of the page
      //                     [...sections] turns this into an array so we can
      //                     use array options like reverse() and findIndex()
      // section.offsetTop - is the vertical offset of the section from the top of the page
      // 
      // basically this lets us compare each section (by offsetTop) against the
      // viewport's current position (by window.scrollY) to figure out what section
      // the user is currently viewing
      const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1;
      // only if the section has changed
      // remove active class from all menu links
      // and then apply it to the link for the current section
      if (current !== currentActive) {
        removeAllActive();
        currentActive = current;
        makeActive(current);
      }
    });
}, false);

for(var i=0;i<albums.length;i++){
    albums[i].addEventListener("click", seleccionarAlbum);
}


//funciones
function seleccionarAlbum(){
   imagenPrincipla.src=this.getElementsByTagName("img")[0].src;
   imagenPrincipla.alt=this.getElementsByTagName("img")[0].alt;
   boton.className="fas fa-play";
   audios.pause();
   audios.currentTime=0;
   audios=new Audio("audios/"+imagenPrincipla.alt);
   audios.addEventListener('play',barraProg,false);
   if(audios.ended){
    boton.className="fas fa-play";
   }
   iniciarMusica();
}
function barraProg(){
    setInterval(function(){
        bProg.value = Math.round((audios.currentTime / audios.duration) * 100);
        if(audios.ended){
            boton.className="fas fa-play";
        }
    })
    
}
function seleccionarImg(){
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
