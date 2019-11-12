import { createProductSection } from './productSection';
import { createGroupsSection } from './groupSection';
import { addNewProductsHandler } from './newProduct';

function createContent() {
    const productSection = createProductSection();

    document.body.appendChild(productSection);

    const [
        groupsSection,
        groupA,
        groupB,
    ] = createGroupsSection();

    document.body.appendChild(groupsSection);

    addNewProductsHandler(groupA, groupB);
}

window.onload = createContent;
