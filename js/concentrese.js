const aleatorio = (desde, hasta)=>((Math.round(Math.random()*(hasta - desde)) + desde));
//console.log(aleatorio(1,30));
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var pos = 0;
for(let i = 1; i<= 15; i++){
    
    pos = aleatorio( 0, arr.length-1 );
    document.getElementById(`b${i}`).addEventListener("click",()=>{
        console.log(`Imprimiendo la posicion ${pos} y su valor en el array es: ${arr[pos]}`);
        document.getElementById(`b${i}`).style.backgroundImage=`url('img/0999${50+arr[pos]}.jpg')`;
        document.getElementById(`b${i}`).style.backgroundSize="cover";
    })

    arr.splice(pos,1);
/*
    console.log(arr);
    pos = aleatorio( 0, arr.length -1);
    console.log(`2Imprimiendo la posicion ${pos} y su valor en el array es: ${arr[pos] }` );
    document.getElementById(`b${i}`).addEventListener("click",()=>{
        document.getElementById(`b${i}`).style.backgroundImage=`url('img/0999${50+pos}.jpg')`;
        document.getElementById(`b${i}`).style.backgroundSize="cover";
    })
    arr.splice(pos,1);
    console.log(arr);
*/
}