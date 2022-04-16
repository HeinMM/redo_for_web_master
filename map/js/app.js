let currentPlace = document.querySelector('.current-place');
let allPath = document.querySelectorAll(".map path");
let infoTitle = document.querySelector('.info-title');

let bluePath = ['KR-50','KR-31','KR-26','KR-27','KR-27','KR-45','KR-46','KR-47','KR-48','KR-49','KR-50','KR-29']

allPath.forEach(function(x){
    
    x.addEventListener('mouseover',function(){
        if (bluePath.includes(x.getAttribute('id'))) {
            x.style.fill = "blue";
            infoTitle.style.color = "blue";
            currentPlace.style.color="blue";
            currentPlace.innerText = x.getAttribute('title');
        }else{
            x.style.fill = "red";
            infoTitle.style.color = "red"
            currentPlace.style.color="red";
            currentPlace.innerText = x.getAttribute('title');
        }
        
    })
    x.addEventListener('mouseout',function(){
        if (bluePath.includes(x.getAttribute('id'))) {
            x.style.fill = "white";
            infoTitle.style.color = "white";
            currentPlace.style.color="white";
            
        }else{
            x.style.fill = "white";
            infoTitle.style.color = "white"
            currentPlace.style.color="white";
            
        }
        
    })
})