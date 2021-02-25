const arrangePricing = () => {
    let descriptionColumn = document.getElementById('product-description-column');
    let variantInformation = descriptionColumn.childNodes[1].childNodes[5];
    let variantPricing = variantInformation.childNodes[1].childNodes[1];
    let options = descriptionColumn.childNodes[1].childNodes[3];
    let gridImages = Array.from(document.getElementsByClassName('grid-item-image-wrap'));
    descriptionColumn.style.position="relative";
    // changes the order of the elements than from original default
    descriptionColumn.prepend(options);
    descriptionColumn.prepend(variantPricing);
}
export default arrangePricing;