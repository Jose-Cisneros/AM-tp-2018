let imagenes = document.querySelectorAll(".foto");
let precios = document.querySelectorAll(".precio");
let totalHtml = document.querySelectorAll("h4")[1];
let total = 0;


imagenes.forEach(imagen => {
    
    imagen.addEventListener("click", () =>{

        if (imagen.style.opacity != 0.5 ){
        total += parseInt(imagen.alt);

        console.log(total);
        imagen.style.opacity = .5 ;

        totalHtml.innerHTML = total;
        }
        else{
            imagen.style.opacity = 1 ;

            total = total -  parseInt(imagen.alt);
            totalHtml.innerHTML = total ;
            
        
        }

    })

});