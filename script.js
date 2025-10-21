const SELECCION = document.getElementById("lista_t")
const BOTON = document.getElementById("boton")
const CONTENEDOR_ELECCION = document.getElementById("conten")
let maquina;
    
    function comprobacion (seleccion, maquina){
        const juego = {
            piedra: "tijera",
            papel: "piedra",
            tijera: "papel"
        };

        if (juego[seleccion] == maquina){
            return CONTENEDOR_ELECCION.innerHTML = `<p>Maquina saco ${maquina} jugador saco ${seleccion} Ganaste</p>`
        }
        if (juego[maquina] == seleccion){
            return CONTENEDOR_ELECCION.innerHTML = `<p>Maquina saco ${maquina} jugador saco ${seleccion} Gano la maquina</p>`
        }
        else{
            return CONTENEDOR_ELECCION.innerHTML = `<p>Maquina saco ${maquina} jugador saco ${seleccion} Ninguno gano</p>`
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