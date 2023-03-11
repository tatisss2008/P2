
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
