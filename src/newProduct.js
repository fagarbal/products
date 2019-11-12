export function addNewProductsHandler(groupA, groupB) {
    const buttons = document.querySelectorAll(".producto__boton");

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            addNewProduct(event, groupA, groupB);
        });
    });
}

function createNewProduct(parentProduct) {
    const newProduct = document.createElement('div');

    newProduct.classList.add('producto-grupo');

    newProduct.innerHTML = `
      <img class="producto-grupo__imagen" src=${parentProduct.childNodes[1].src} alt="imagen ${parentProduct.childNodes[3].childNodes[1].textContent} ">
      <p class="producto-grupo__titulo">${parentProduct.childNodes[3].childNodes[1].textContent}</p>
    `;

    return newProduct;
}

function addNewProduct(event, groupA, groupB) {
    const target = event.target;

    const group = target.textContent;
    const parentProduct = target.parentNode.parentNode;

    const newProduct = createNewProduct(parentProduct);

    const groupProducts = Array.from(
        document.getElementsByClassName('producto-grupo')
    );

    const isPreviousProduct = groupProducts.some((previousProduct) =>
        previousProduct.innerHTML == newProduct.innerHTML
    );

    if (!isPreviousProduct) {
        if (group === "grupo a") {
            groupA.appendChild(newProduct);
        } else {
            groupB.appendChild(newProduct);
        };
    } else {
        console.log("elemento repetido");

    }
};
