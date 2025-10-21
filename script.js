const SELECCION = document.getElementById("lista_t")
    const BOTON = document.getElementById("BOTON")
    const CONTENEDOR_ELECCION = document.getElementById("eleccion")
    let maquina;
    BOTON.addEventListener ("click", function(){
        const random = (Math.random()*3) + 1

        if (random == 1){
            maquina = ""
        }
        
        const seleccionado = SELECCION.value;
        console.log(seleccion)
    });