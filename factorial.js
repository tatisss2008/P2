
//alert ("Javascript ok");  

function factorial()
{
    let n1 = parseInt(document.getElementById('n1').value);
    let factorial=1;
    let cont = 1;   

    while(cont <= n1){
        factorial= factorial*cont;
        cont++;
    }

    
    let resultado = document.getElementById("resultado");
    resultado.value=factorial;
    //console.log("ingresi: "+factorial);

    return factorial;
}

// Capturar datos en variables en ambito local


function numeros()
{

    let nombre;
nombre = prompt();
document.write(nombre)

console.log(nombre);

    let primero = frutas[0]

}

function cronometro ()
{
    let hora=0, minuto=0, segundo=0

    while (true)
    {
        if (segundo<60)
        {

            segundo++;
        }else{
            segundo=0;
            minuto++;

            if(minuto<60)
            {
                minuto++;
            }else{
                minuto=0;
                hora++;
            }
        }

        //Pausa v1
        
        // let fecha = new Date();
        // let fecha2 = new Date();

        // do
        // {
        //     fecha2= new Date();
        // } while (fecha2-fecha<1000)


        //pausa V2
        //setTimeout(call,1000);

        // retraso 1seg
        //Promise: objeto que representa la ejecucion de una funcion asincrona
        new Promise (r=> setTimeout(r,1000));

        console.log(hora+":"+minuto+":"+segundo);
    }
}

// function call()
// {
//     console.log("termine.");
// }