let url = "http://localhost:3000/paquetes/";

fetch(url)
.then((response) =>{

return response.json();

})
.then((json) =>{

    renderHtml(json);

})