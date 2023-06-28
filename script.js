let navtoggle=document.querySelector("#menu-bar");
let sidebar = document.querySelector(".side-bar");
navtoggle.addEventListener("click",function(){
    if(navtoggle.firstElementChild.classList.contains("fa-bars")){
    console.log(navtoggle.firstElementChild.classList.replace("fa-bars","fa-times"));
    }
    else{
        navtoggle.firstElementChild.classList.replace("fa-times","fa-bars");
    }
    sidebar.classList.toggle("show_sidebar");
})

// card flip
var cards=document.querySelectorAll('.card');
    
    [...cards].forEach((card)=>{
        card.addEventListener('click',function(){
            for(i=0;i<4;i++){
                if(card==cards[i]){
                continue;
            }
        if(cards[i].classList=='card is-flipped'){
            cards[i].classList.remove("is-flipped");
        }
    }
            card.classList.toggle('is-flipped');           
        })
    })

    //card flip end