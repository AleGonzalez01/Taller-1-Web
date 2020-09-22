const btns = document.querySelectorAll('.interaction__buttons .buttons');
const image = document.querySelector('interaction__image');
let numberimages= 0;
console.log(numberimages);

btns.forEach(function(btn){

    btn.addEventListener('click', function(){
        btn.classList.toggle("buttons--blacks");
       
    })
})

btns[0].addEventListener('click', function(){
    numberimages=1;
    console.log(numberimages);
})

btns[1].addEventListener('click', function(){
    numberimages=2;
    console.log(numberimages);
})

btns[2].addEventListener('click', function(){
    numberimages=3;
    console.log(numberimages);
})

if(numberimages==1){
    image.style.backgroundImage = "url('+ /imagenes/Soloconsola +')";
}



