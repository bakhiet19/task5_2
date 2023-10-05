let closes = document.querySelector('#close');
let black = document.querySelector('.note');
let items = document.getElementsByClassName('item');
let item3 = document.querySelector('.item3')
let scrolls = document.querySelector('.scroll .child');
let cards = document.querySelectorAll('.perfiction .card');
let icon = document.querySelectorAll('.perfiction .card i');




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





function add(){
  setInterval(function(){
    for(let i = 0 ; i < items.length ; i++){
        items[i].classList.toggle('red');
    }
  },3000)
   
}

add()


function add_item3(){
    setInterval(function(){
     item3.classList.toggle('red');
    },4500)
     
  }
  
  add_item3()