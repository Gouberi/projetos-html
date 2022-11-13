
let motor = false;

let altitude = 300;
let fuel = 1005;
let velocidade = 0;
let acelerar = 0;
let intervalo;

let liga = () => { 
    motor = true;
document.getElementById("naveP").src = "imgs/nave2.png";    
}

let desliga = () => { 
    motor = false; 
    document.getElementById("naveP").src = "imgs/nave1.png";    
    }



let ciclo = () => {
    if (fuel <= 0) desliga();
    if (motor) {acelerar = 0.2; fuel--;}
    else acelerar = -0.3;
    velocidade += acelerar
    altitude += velocidade;

    if (altitude <=0) {
     if (velocidade <= -2.4) alert("Nave EXPLODIU");
     else alert("Pouso bem sucedido");
     clearInterval(intervalo)

    }

    document.getElementById("IdInfo").innerHTML = `Velocidade: ${velocidade.toFixed(2)} KM/H <br> Fuel: ${fuel} L`
    document.getElementById("naveP").style.top = (300-altitude) + "px";
    }
        
intervalo = window.setInterval(ciclo, 100); 
document.addEventListener('keydown', liga)
document.addEventListener('keyup', desliga)



