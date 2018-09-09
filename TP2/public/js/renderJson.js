function renderHtml(json) {

    let productos = json.productos;
    let html = ``;

    
    productos.map(producto => {

        html += renderProducto(producto);

    })

    document.querySelectorAll(".hola")[0].innerHTML = html;
    clickPrice();

}


function renderProducto(producto) {

    let html = `
    
    <td>
        <div>
            <img src="${producto.srcimagen}" class="img-fluid" alt="1000">
        </div>
    </td>
    `;

    return html;

}


