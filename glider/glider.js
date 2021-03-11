new Glide(".images",{
    type: 'carousel',
    perView: 5,
    focusAt: 'center',
    breakpoints:{
        700:{
            perView: 2
        },
        500:{
            perView: 1
        }
    }
   
    
}).mount();