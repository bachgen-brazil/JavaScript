function VAR(){
    let n1 = Number(prompt("Informe um numero(1):"));
    return n1
}

function Med(n1,n2){
    ap = (n1+n2)/2;
    if (ap>=6){
        alert('APROVADO');
    }else{
        alert('Reprovado');
    }
}

function Maior(n1,n2,n3){
    if(n1>n2&&n1>n3){
        return n1
    } else if(n2>n3){
        return n2
    }else{
        return n3
    }
}

function CNH(idade){
    if(idade>=18){
        let cnh = prompt('VOCE POSSUI CNH?').toLowerCase();
        if (cnh == 'sim'){
            cnh = true;
            alert('Voce Pode Dirigir');
        }else{
            alert('VOCE NAO PODE DIRIGIR'); 
        }
    }
}

Med(VAR(),VAR());
CNH(VAR());
Maior(VAR(),VAR(),VAR());