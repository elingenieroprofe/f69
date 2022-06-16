id="c1";
let arrays = [];
setInterval(()=>{
    let aleatorio = Math.round(Math.random() * (35 - 1) + 1,1);
    ant = document.getElementById(id);
    ant.style.background="rgb(255,255,255)";
    id = `c${aleatorio}`;
    let divColor = document.getElementById(id);
    divColor.style.background="red";
    
    arrays.push(id);

},1000)
