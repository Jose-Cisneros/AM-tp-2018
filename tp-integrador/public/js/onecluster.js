function renderOneCluster() {

    var url_string = window.location.href; window.location.href
    var url = new URL(url_string);
    let aerolineaIda = url.searchParams.get("aerolinea");
    let horaIda = url.searchParams.get("horaIda");
    let horaLlegada = url.searchParams.get("horaLlegada")
    let durationIda = url.searchParams.get("durationIda")
    let ciudadfromida = url.searchParams.get("ciudadfromida")
    let ciudadtoida = url.searchParams.get("ciudadtoida")
    let aerolineavuelta = url.searchParams.get("aerolineavuelta")
    let horavuelta = url.searchParams.get("horavuelta")
    let horaLlegadavuelta = url.searchParams.get("horaLlegadavuelta")
    let durationvuelta = url.searchParams.get("durationvuelta")
    let ciudadfromvuelta = url.searchParams.get("ciudadfromvuelta")
    let ciudadtovuelta = url.searchParams.get("ciudadtovuelta")
    let escalaida = url.searchParams.get("escalaida")
    let escalavuelta = url.searchParams.get("escalavuelta")




    let html = `
    
    <div class="cluster">
    
    <div class=".header-cluster flex-clusterHead IDA">
    
            <div>
    
                <h5>IDA</h5>
    
            </div>
            <div class="date">
                <h5 class="type">22/10/2018</h5>
            </div>
    
    
        </div>
        <div class="data-cluster">
    
            <div class="airline">
                <h6 id="airlineId">${aerolineaIda}</h6>
            </div>
            <div class="desde">
                <h6>${ciudadfromida}</h6>
            </div>
            <div class="directo">
                <h6>${escalaida}</h6>
            </div>
            <div class="destino">${ciudadtoida}</div>
    
            <div class="duracion">
                <h6>${durationIda}</h6>
            </div>
    
        </div>
        <div class="info">
            <div class="salida">
                <h6>Hora salida: ${horaIda}</h6>
            </div>
            <div class="Legada">
                <h6>Hora llegada: ${horaLlegada}</h6>
            </div>
            <div class="duracion">
                    <h6>Duracion: ${durationIda}</h6>
                </div>
        </div>
        </div>
        <hr>
    
    
    
    <div class="cluster">
    
    <div class=".header-cluster flex-clusterHead VUELTA">
    
            <div>
    
                <h5>VUELTA</h5>
    
            </div>
            <div class="date">
                <h5 class="type">22/10/2018</h5>
            </div>
    
    
        </div>
        <div class="data-cluster">
    
            <div class="airline">
                <h6 id="airlineId">${aerolineavuelta}</h6>
            </div>
            <div class="desde">
                <h6>${ciudadfromvuelta}</h6>
            </div>
            <div class="directo">
                <h6>${escalavuelta}</h6>
            </div>
            <div class="destino">${ciudadtovuelta}</div>
    
            <div class="duracion">
                <h6>${durationvuelta}</h6>
            </div>
    
        </div>
        <div class="info">
            <div class="salida">
                <h6>Hora salida: ${horavuelta}</h6>
            </div>
            <div class="Legada">
                <h6>Hora llegada: ${horaLlegadavuelta}</h6>
            </div>
            <div class="duracion">
                    <h6>Duracion: ${durationvuelta}</h6>
                </div>
        </div>
        </div>
        <hr>

        <form action="https://formspree.io/josecisneros654@gmail.com" method="POST">
            <div style="display:none">
                <input type="text" name="Ciudad IDA" value="${ciudadfromida}">
                
                <input type="text" name="Aerolinea IDA" value="${aerolineaIda}">
            
                <input type="text" name="Escalas " value="${escalaida}">
        
                <input type="text" name="Destino IDA" value="${ciudadtoida}">

                <input type="text" name="Duracion" value="${durationIda}">

                <input type="text" name="Hora de salida" value="${horaIda}">
        
                <input type="text" name="Hora de llegada" value="${horaLlegada}">

                <input type="text" name="Ciudad  Vuelta" value="${ciudadfromvuelta}">
                
                <input type="text" name="Aerolinea  Vuelta" value="${aerolineavuelta}">
            
                <input type="text" name="Escalas  Vuelta" value="${escalavuelta}">
        
                <input type="text" name="Destino  Vuelta" value="${ciudadtovuelta}">

                <input type="text" name="Duracion Vuelta" value="${durationvuelta}">

                <input type="text" name="Hora de salida Vuelta" value="${horavuelta}">
        
                <input type="text" name="Hora de llegada Vuelta" value="${horaLlegadavuelta}">
            </div>

        
                <label> Enviar por mail</label>
                <input type="email"  name="_cc"> 

                <input type="submit" value="Compartir">

        </form>
    
    
        `
    document.querySelector(".rendercluster").innerHTML += html;






}

renderOneCluster();
