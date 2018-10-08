function renderClusters(itinerario,numero){

    console.log(itinerario.clusters)
    let contador = 0;
    document.querySelector(".rendercluster").innerHTML = ``;


    let html = ``;

    itinerario.clusters.map(cluster =>{


            contador = contador + 1;

          if (contador <= numero){
            html +=
             
            `
            <div class="clusterIdaVUelta">

            ${renderCluster(cluster.rutas)}
           
                </div>
                <hr>

            `
          }


    })

    html += `
    <a  onclick="renderall()">Ver más</a>

    
    `

    document.querySelector(".rendercluster").innerHTML += html;

}


function escalas(num){

    if (num > 0){
        return (num + " escala")
    }
    else{
        return "Directo"
    }

}

function from(itinerario,ruta){
    if(ruta.type == "IDA"){
        return itinerario.origen
    }
    else{
        return itinerario.destination;
    }
}
function to(itinerario,ruta){
    if(ruta.type == "IDA"){
        return itinerario.destination
    }
    else{
        return itinerario.origen;
    }
}

function renderall(){
    renderClusters(itinerario,itinerario.clusters.length)
}


function renderCluster(rutas) {

    let html = ``;

    rutas.map(ruta => {

    

 html += `


<div class="cluster">

<div class=".header-cluster flex-clusterHead ${ruta.type}">

        <div>

            <h5>${ruta.type}</h5>

        </div>
        <div class="date">
            <h5 class="type">${ruta.fecha.substring(0,10)}</h5>
        </div>


    </div>
    <div class="data-cluster">

        <div class="airline">
            <h6 id="airlineId">${ruta.airline}</h6>
        </div>
        <div class="desde">
            <h6>${from(itinerario,ruta)}</h6>
        </div>
        <div class="directo">
            <h6>${escalas(ruta.escala)}</h6>
        </div>
        <div class="destino">
        <h6>   ${to(itinerario,ruta)}</h6>
        </div>

        <div class="duracion">
            <h6>${ruta.duration}</h6>
        </div>

    </div>
    <div class="info">
        <div class="salida">
            <h6>Hora salida: ${ruta.timeDeparture}</h6>
        </div>
        <div class="Legada">
            <h6>Hora llegada: ${ruta.timeArrive}</h6>
        </div>
        <div class="duracion">
                <h6>Duracion: ${ruta.duration}</h6>
            </div>
    </div>
    </div>
    <hr>



`

})

html += `
<a href="/cluster.html?aerolinea=${rutas[0].airline}&horaIda=${rutas[0].timeDeparture}&horaLlegada=${rutas[0].timeArrive}&durationIda=${rutas[0].duration}&ciudadfromida=${from(itinerario,rutas[0])}&ciudadtoida=${to(itinerario,rutas[0])}&aerolineavuelta=${rutas[1].airline}&horavuelta=${rutas[1].timeDeparture}&horaLlegadavuelta=${rutas[1].timeArrive}&durationvuelta=${rutas[1].duration}&ciudadfromvuelta=${from(itinerario,rutas[1])}&ciudadtovuelta=${to(itinerario,rutas[1])}&escalaida=${escalas(rutas[0].ruta)}&escalavuelta=${escalas(rutas[1].ruta)}">
<input class="btn-light mt-4 btn recomendar" type="button" value="Recomendar" "></input>
</a>`

return html;

}


function recomendar(){

    let botones = document.querySelectorAll(".recomendar")

    botones.forEach(boton =>{

        boton.addEventListener("click", () =>{

         let clusterCompleto =   boton.parentNode;

        let aerolineaIda = document.querySelectorAll(".recomendar")[0].parentNode.parentElement.querySelector(".data-cluster .airline h6").innerHTML



        })

    })

}



