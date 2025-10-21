const SELECCION = document.getElementById("lista_t")
    const BOTON = document.getElementById("BOTON")
    let CONTENEDOR_ELECCION = document.getElementsByClassName("contenedor")
    let maquina;
    
    function comprobacion (seleccion, maquina){
        const juego = {
            piedra: "tijera",
            papel: "piedra",
            tijera: "papel"
        };

        if (juego[seleccion] == maquina){
            return console.log("Maquina saco ", maquina, "\njugador saco", seleccion, "\nGanaste")
        }
        if (juego[maquina] == seleccion){
            return console.log("Maquina saco ", maquina, "\njugador saco", seleccion, "\nGano la maquina")
        }
        else{
            return console.log("Maquina saco ", maquina, "\njugador saco", seleccion, "\nNinguno gano")
        }



    }
    BOTON.addEventListener ("click", function(){
        const random = Math.floor((Math.random()*3) + 1)
        const seleccionado = SELECCION.value;

        if (random == 1){
            maquina = "piedra"
            comprobacion(seleccionado,maquina )
        }
        if (random == 2){
            maquina = "papel"
            comprobacion(seleccionado,maquina )
        }
        if (random == 3){
            maquina = "tijera"
            comprobacion(seleccionado,maquina )
        }
    });