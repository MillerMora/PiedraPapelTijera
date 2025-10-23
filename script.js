SELECCION_J1 = document.getElementById("lista_j1")
SELECCION_J2 = document.getElementById("lista_j2")

const CONTADOR1 = document.getElementById("contadorj1")
const CONTADOR2 = document.getElementById("contadorj2")

const ELECCIONMAQUINA = document.getElementById("eleccionMaquina")
const GANADOR = document.getElementById ("ganador")
let maquina;
let puntaje1 = 0
let puntaje2 = 0
let maquinaesta = false



function comprobacion (seleccion1, seleccion2, maquinaesta){
    const juego = {
        piedra: "tijera",
        papel: "piedra",
            tijera: "papel"
        };
        
        
        if (maquinaesta){
            if (juego[seleccion1] == seleccion2){
                puntaje1 += 1
                ELECCIONMAQUINA.innerHTML = `<p id="eleccionMaquina">${seleccion2}</p>`
                CONTADOR1.innerHTML = `<p id="contadorj1">${puntaje1}</p>`
                return GANADOR.innerHTML =   ` <p id="ganador">Ganaste</p>`
            }
            if (juego[seleccion2] == seleccion1){
                puntaje2 += 1
                ELECCIONMAQUINA.innerHTML = `<p id="eleccionMaquina">${seleccion2}</p>`
                CONTADOR2.innerHTML = `<p id="contadorj2">${puntaje2}</p>`
                return GANADOR.innerHTML =   ` <p id="ganador">Gano la maquina</p>`
                
            }
            else{
                ELECCIONMAQUINA.innerHTML = `<p id="eleccionMaquina">${seleccion2}</p>`
                return GANADOR.innerHTML =   ` <p id="ganador">Ninguno gano</p>`
            }
        }
        
        if (juego[seleccion1] == seleccion2){
            puntaje1 += 1
            CONTADOR1.innerHTML = `<p id="contadorj1">${puntaje1}</p>`
            return GANADOR.innerHTML =   ` <p id="ganador">Gano el jugador 1</p>`
        }
        if (juego[seleccion2] == seleccion1){
            puntaje2 += 1
            CONTADOR2.innerHTML = `<p id="contadorj2">${puntaje2}</p>`
            return GANADOR.innerHTML =   ` <p id="ganador">Gano el jugador 2</p>`
            
        }
        else{
            return GANADOR.innerHTML =   ` <p id="ganador">Ninguno gano</p>`
        }
        
        
        
    }
    try {
        const BOTON = document.getElementById("boton")
        BOTON.addEventListener ("click", function(){
            const random = Math.floor((Math.random()*3) + 1)
            const seleccionado = SELECCION_J1.value
            maquinaesta = true
            if (random == 1){
                maquina = "piedra"
                comprobacion(seleccionado,maquina, maquinaesta )
            }
            if (random == 2){
                maquina = "papel"
                comprobacion(seleccionado,maquina, maquinaesta )
                
            }
            if (random == 3){
                maquina = "tijera"
                comprobacion(seleccionado,maquina, maquinaesta )
                
            }
        });
    } catch (error) {
        const BOTON2 = document.getElementById("boton2")
        BOTON2.addEventListener ("click", function(){
            const seleccionado = SELECCION_J1.value
            const seleccionado2 = SELECCION_J2.value
            comprobacion(seleccionado,seleccionado2, maquinaesta )
            maquinaesta = false
        });
    }
    
