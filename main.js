let phone = document.querySelector('.phone')


//  generate a randm color

let randomColor = function() {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0 ; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
    console.log(random);
}

let intervalId
let startChangingColor = function(){
    
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1500)
        
    }
    function  changeBgColor() {
        phone.style.backgroundColor= randomColor();
    }
}
document.querySelector('.start').
addEventListener('click', startChangingColor)

let stopChangingColor = function (){
    clearInterval(intervalId);  
    intervalId=null
    
}
document.querySelector('.stop').
addEventListener('click', stopChangingColor)

