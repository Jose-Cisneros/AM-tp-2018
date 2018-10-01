function renderClusters(itinerario,numero){

    console.log(itinerario.clusters)
    let contador = 0;
    document.querySelector(".rendercluster").innerHTML = ``;


    let html = ``;

    itinerario.clusters.map(cluster =>{

        cluster.rutas.map(ruta =>{

            contador = contador + 1;

          if (contador <= numero){
            html +=
             
            `
            <div class="cluster">

            <div class=".header-cluster flex-clusterHead ${ruta.type}">

                    <div>

                        <h5>${ruta.type}</h5>

                    </div>
                    <div class="date">
                        <h5 class="type">22/10/2018</h5>
                    </div>


                </div>
                <div class="data-cluster">

                    <div class="airline">
                        <h6>${ruta.airline}</h6>
                    </div>
                    <div class="desde">
                        <h6>${from(itinerario,ruta)}</h6>
                    </div>
                    <div class="directo">
                        <h6>${escalas(ruta.escala)}</h6>
                    </div>
                    <div class="destino">${to(itinerario,ruta)}</div>

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
          }

        })

    })

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