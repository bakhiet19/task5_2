let closes = document.querySelector('#close');
let black = document.querySelector('.note');
let items = document.querySelector('.item')
let scrolls = document.querySelector('.scroll .child');
let cards = document.querySelectorAll('.perfiction .card');
let icon = document.querySelectorAll('.perfiction .card i');
console.log(icon);











// cards.forEach(function(e){
//     e.addEventListener('click' , function(){
//        icon.forEach(function(es){
//         es.classList.toggle('fa-plus')
//         es.classList.toggle('fa-minus')
//        })
       
//        })
      
//     })


    function plus(){
       console.log(this);
    }








scrolls.addEventListener('click' , function(){
    scrollTo(0 , 0)
})


function clos(){
    console.log('hello');
    black.classList.add('black')
}


// setTimeout(function(){
//     items.classList.toggle('var(--red)');
// },3000)