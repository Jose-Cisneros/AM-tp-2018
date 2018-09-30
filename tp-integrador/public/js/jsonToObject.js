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

function mapperJson(json){


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

        rutaNueva = new setRoute(aerolinea,horaSalida,escalas,horaLlegada,duracion,"ida")
     
        if (ruta.returnfl.length > 0){
         let aerolinea1 = ruta.returnfl[0].airline;
         let duracion1 = ruta.returnfl[0].duration;
         let fechaLlegada1 = ruta.returnfl[0].arrdate;
         let escalas1 = ruta.returnfl[0].onwardflights.length;
         let horaSalida1 = ruta.returnfl[0].deptime;
         let horaLlegada1 = ruta.returnfl[0].arrtime;
       
         rutaNueva2 = new setRoute(aerolinea1,horaSalida1,escalas1,horaLlegada1,duracion1,"vuelta")
         rutasCluster.push(rutaNueva2);

        }
         rutasCluster.push(rutaNueva);
         
         clusterNuevo = new setCluster(rutasCluster);

         itinerario.clusters.push(clusterNuevo)

        })

        renderClusters(itinerario)

}


function setRoute(aerolinea, tiempoSalida, escalas, tiempoLlegada, duracion,tipo) {


    this.airlane = aerolinea;
    this.timeArrive = tiempoLlegada;
    this.timeDeparture = tiempoSalida;
    this.escala = escalas;
    this.duration = duracion;
    this.type = tipo;


}

function setCluster(rutas){

    this.rutas = rutas;

}




