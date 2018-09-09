function renderHtml(json) {

    let productos = json.productos;
    let html = ``;

    productos.map(producto => {

        html += renderProducto(producto);

    })

    document.querySelectorAll(".fotos")[0].innerHTML = html;

}


function renderProducto(producto) {

    let html = `
    
    <td>
    <center>
      <img src="${producto.srcimagen}" class="img-fluid" alt="1000">
    </center>
  </td>
    `;

    return html;

}


