/*
Comente
*/

let nm = prompt('Informe nome:');
let n1 = Number(prompt("Informe valor 1:"));
let n2 = Number(prompt("Informe valor 2:"));

function String(nm){
    alert(`Olá,${nm}`)
}
function Quadrado(lado){
    areaQ = lado**2;
    alert(`A area do qudrado é ${areaQ} m2`);
}
function Triangulo(base,altura){
    areaT = base*altura;
    alert(`A area do triangulo é ${areaT} m2`);
}
function Show(numero){
    for(i=0;i<=numero;i++){
        console.log(i)
    }
}
function Pares(numero){
    for(i=0;i<=numero;i++){
        if(i % 2 == 0){
            console.log(i)
        }
    } 
}

String(nm);
Quadrado(n1);
Triangulo(n1,n2);
Show(n1);
Pares(n1);