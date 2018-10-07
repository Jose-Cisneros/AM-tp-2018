
$(document).on("scroll", function () {
    if
    ($(document).scrollTop() > 86) {
        $("#banner").addClass("shrink");
    }
    else {
        $("#banner").removeClass("shrink");
    }
});

let buscar = document.querySelector(".buscar");


buscar.addEventListener("click", () => {

    let from = document.querySelector(".origin").value;
    let to = document.querySelector(".destino").value;
    let dateFrom = document.querySelector(".datefrom").value;
    let dateTo = document.querySelector(".dateto").value;
    let adults = document.querySelector(".pasajeros").value;

    clusterAux = [];

    let hist = {
        from: from,
        to: to,
        datefrom: dateFrom,
        dateTo: dateTo,
        adults: adults
    }
    historial.push(hist)


    event.preventDefault();


    let url = "http://localhost:3000/buscar";
    url += "?from=" + from;
    url += "&to=" + to;
    url += "&dateFrom=" + dateFrom;
    url += "&dateTo=" + dateTo;
    url += "&adults=" + adults;

    document.querySelector(".rendercluster").innerHTML = ``;
    
    document.querySelector(".filtros").style.display = "none";
    document.querySelector(".loader").style.display = "block";


    fetch(url)
    .then((res) =>{
        return res.json();
    })
    
    .then(res =>{

        document.querySelector(".filtros").style.display = "block";
        document.querySelector(".loader").style.display = "none";
        mapperJson(res)

    })

})


let historial = []

document.querySelector(".historial").addEventListener("click", () =>{

    let html = ``;

    historial.map(elem =>{
        
    
        html += `
        <div class="historial-2">
               <h6>Origen: ${elem.from}</h6>
                <h6>Destino: ${elem.to}</h6>
                <h6>Fecha ida: ${elem.datefrom}</h6>
                <h6>Fecha vuelta: ${elem.dateTo}</h6>
                <h6>Pasajeros: ${elem.adults}</h6>
        </div>`   

    })

    document.querySelector(".historial-class").innerHTML = html;
})