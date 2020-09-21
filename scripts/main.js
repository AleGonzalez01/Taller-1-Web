const btns = document.querySelectorAll('.interaction__buttons .buttons');

btns.forEach(function(btn){

    btn.addEventListener('click', function(){
        btn.classList.toggle("buttons--blacks");
       
    })
})


