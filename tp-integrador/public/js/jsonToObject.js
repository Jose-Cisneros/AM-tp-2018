let itinerario = {

    origen: "",
    origenBack: "",
    airportFrom: "",
    airportFromBack: "",
    destination: "",
    destinationBack: "",
    airportTo: "",
    airportToBack: "",
    vuelta: true,
    dateFrom: "",
    dateFromBack: "",
    clusters: []
}

let clusterAux = [];


function mapperJson(json){

     clusterAux = [];


    console.log(json)
    itinerario.clusters = []
    itinerario.origen = json.data.onwardflights[0].origin;
    
    itinerario.destination = json.data.onwardflights[0].returnfl[0].origin
    
    json.data.onwardflights.map(ruta =>{

        let rutasCluster = []


        let aerolinea = ruta.airline;
        let duracion = ruta.duration;
        let fechaLlegada = ruta.arrdate;
        let escalas = ruta.onwardflights.length;
        let horaSalida = ruta.deptime;
        let horaLlegada = ruta.arrtime;

        rutaNueva = new setRoute(aerolinea,horaSalida,escalas,horaLlegada,duracion,"IDA")
         
        rutasCluster.push(rutaNueva);

        if (ruta.returnfl.length > 0){
         let aerolinea1 = ruta.returnfl[0].airline;
         let duracion1 = ruta.returnfl[0].duration;
         let fechaLlegada1 = ruta.returnfl[0].arrdate;
         let escalas1 = ruta.returnfl[0].onwardflights.length;
         let horaSalida1 = ruta.returnfl[0].deptime;
         let horaLlegada1 = ruta.returnfl[0].arrtime;
       
         rutaNueva2 = new setRoute(aerolinea1,horaSalida1,escalas1,horaLlegada1,duracion1,"VUELTA")
         rutasCluster.push(rutaNueva2);

        }
         
         clusterNuevo = new setCluster(rutasCluster);

         itinerario.clusters.push(clusterNuevo)

        })

        renderClusters(itinerario,20)
        clusterAux = itinerario.clusters;

}


function setRoute(aerolinea, tiempoSalida, escalas, tiempoLlegada, duracion,tipo) {


    this.airline = aerolinea;
    this.timeArrive = tiempoLlegada;
    this.timeDeparture = tiempoSalida;
    this.escala = escalas;
    this.duration = duracion;
    this.type = tipo;


}

function setCluster(rutas){

    this.rutas = rutas;

}







// function filtroConEscala(){
    
    var radioEscala = document.getElementById('directo');

    radioEscala.addEventListener("click", function () {

    
        let nuevoItinerario = itinerario;

        nuevoItinerario.clusters = clustersDirectos(clusterAux);

      if (nuevoItinerario.clusters.length > 0){ 
          
        renderClusters(nuevoItinerario,20);


    }

    })

//  }


function clustersDirectos(clusters){

    let clustersDirecto = [];

    clusters.map(cluster =>{

        let contador = 0;


        cluster.rutas.map(ruta =>{


            if (ruta.escala < 1){
                contador = contador + 1;
        }
        
   
        })
        if (contador != 0){
            clustersDirecto.push(cluster);

        }

    })

    return clustersDirecto;



}




var radioEscala2 = document.getElementById('escala');

radioEscala2.addEventListener("click", function () {



    let nuevoItinerario = itinerario;

    nuevoItinerario.clusters = clustersConEscalas(clusterAux);

  if (nuevoItinerario.clusters.length > 0){ 
      
    renderClusters(nuevoItinerario,20);


}

})

function clustersConEscalas(clusters){

    let clustersDirecto = [];

    clusters.map(cluster =>{

        let contador = 0;

        cluster.rutas.map(ruta =>{


            if (ruta.escala > 1){
                contador = contador + 1;
            }
   
        })

        if (contador > 0){
        clustersDirecto.push(cluster);
        }


    })

    return clustersDirecto;



}



var radioEscala3 = document.getElementById('todos');

radioEscala3.addEventListener("click", function () {



    let nuevoItinerario = itinerario;

    nuevoItinerario.clusters = clusterAux;

      
    renderClusters(nuevoItinerario,20);




})


