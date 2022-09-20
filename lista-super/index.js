// Meto en un array los productos válidos, explicaré más adelante porque
const validProducts = ["Manzana", "Plátano", "Pollo", "Carne molida", "Limón", "Zanahoria"];

// Localizo el elemento img para luego cambiarle su valor
const img = document.querySelector("img");

// Cojo todos los elementos li
const products = document.getElementsByTagName("li");

// Recorro todos los elementos li
for (const product of products) {

    /**
     * Y entraremos en este if sólo si el texto de los li se encuentra en el array de productos válidos.
     * Esto es lo que dije al principio que iba a explicar más adelante.
     */
    if (validProducts.includes(product.textContent)) {

        // A cada elemento li ya filtrado, le añadimos un evento click
        product.addEventListener("click", () => {

            // Cojo el texto del elemento li y le quito los acentos
            const nameWithOutAccents = `${product.textContent.toLowerCase()}`.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            
            /**
             * Para los productos que tengan espacio en sus nombres, sustituyo los espacios por guión bajo.
             * Ya que, normalmente, el nombre de las imágenes y demás, cuando tienen espacios, se suelen guardar así.
             */
            const nameWithOutSpaces = nameWithOutAccents.replace(/ /g, "_");

            /**
             * A la imagen de nuestro html que localizamos al principio del script
             * le establecemos su src y alt
             */
            img.setAttribute("src", `./images/${nameWithOutSpaces}.jpg`);
            img.setAttribute("alt", product.textContent);

        });

    }
}