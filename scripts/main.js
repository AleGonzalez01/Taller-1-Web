const btns = document.querySelectorAll('.interaction__buttons .buttons');
const image = document.querySelector('interaction__image');

btns.forEach(function(btn){

    btn.addEventListener('click', function(){
        btn.classList.toggle("buttons--blacks");
        let name = "";
        btns.forEach(function(b){
            name += b.classList.contains("buttons--blacks");
        })
        console.log(name);
        image.style.backgroundImage = 'url(./imagenes/'+name+'.png)';
    })
})








