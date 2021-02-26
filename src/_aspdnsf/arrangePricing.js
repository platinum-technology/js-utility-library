const arrangePricing = () => {
    let variantPricing = variantInformation.childNodes[1].childNodes[1];
    let options = descriptionColumn.childNodes[1].childNodes[3];

    descriptionColumn.style.position="relative";
    // changes the order of the elements than from original default
    descriptionColumn.prepend(options);
    descriptionColumn.prepend(variantPricing);
}
export default arrangePricing;