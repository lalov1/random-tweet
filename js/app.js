"use strict"; 

let element = document.querySelector(".head");

element.addEventListener("click", function(){
    
    if(!document.querySelector(".animate")){
        this.classList.add("animate");
        setTimeout(function(){
            element.classList.remove("animate");
        }, 4000);        
    }else{
        //setTimeout(function(){
            element.classList.remove("animate");
        //}, 4000);
        this.classList.add("animate");
    }

});

//console.log(element);