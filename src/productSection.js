import { products } from './products';

export function createProduct(product) {
    const productBlock = document.createElement('div');

    productBlock.classList.add('producto');

    productBlock.innerHTML = `
        <img class="producto__imagen" src="./images/${product.foto}" alt="foto ${product.denominacion}">
        <div class="producto__info">
            <p class="producto__info-titulo">${product.denominacion}</p>
            <p class="producto__info-comentario">${product.comentario}</p>
            <button class="producto__boton producto__boton--grupoA">grupo a</button>
            <button class="producto__boton producto__boton--grupoB">grupo b</button>
        </div>
    `;

    return productBlock;
}

export function createProductSection() {
    const productSection = document.createElement('div');
    productSection.classList.add('seccion-productos');

    products.forEach((product) => {
        const productBlock = createProduct(product);
        productSection.appendChild(productBlock);
    });

    return productSection;
}
