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