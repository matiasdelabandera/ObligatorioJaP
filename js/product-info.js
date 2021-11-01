//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            showProductList(resultObj);
        }
});



function showProductList(resultObj){
    let htmlContentToAppend = "";

        htmlContentToAppend += ` 
        <h1>` + product.name + `</h1>
        `
    }

    document.getElementById("Product-info").innerHTML = htmlContentToAppend;