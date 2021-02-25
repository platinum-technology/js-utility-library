function updateEntityDropDownLayout(){
    let productContainer = document.getElementById('product-container');
    let imageColumn = document.getElementById('product-image-column');
    let image = imageColumn.childNodes[0].childNodes[2].childNodes[1];

    let descriptionColumn = document.getElementById('product-description-column');
    let variantInformation = descriptionColumn.childNodes[1].childNodes[5];
    let variantPricing = variantInformation.childNodes[1].childNodes[1];
    let options = descriptionColumn.childNodes[1].childNodes[3];
    let gridImages = Array.from(document.getElementsByClassName('grid-item-image-wrap'));
  
    // new html column 
    let updatedSidebarColumn = document.createElement("div");
    updatedSidebarColumn.classList.add('col-sm-4');
    updatedSidebarColumn.classList.add('updated-sidebar')
    
    descriptionColumn.style.position="relative";
    // changes the order of the elements than from original default
    descriptionColumn.prepend(options);
    descriptionColumn.prepend(variantPricing);
    for(let i = 0; i < gridImages.length; i++){
        let gridImg = gridImages[i].childNodes[0];

        if(gridImg.src.includes('nopictureicon.gif')){
            gridImg.style.display = 'none';
        }
    }
    // related products
    let relatedProducts = Array.from(document.getElementsByClassName('related-products'));
    let relatedInnerContainer = relatedProducts[0].childNodes[7].childNodes[1].childNodes[1].childNodes[1];
    let productGridItem = relatedProducts[0].childNodes[7].childNodes[1].childNodes[1];
    // upsell products
    let upsellItems = Array.from(document.getElementsByClassName('upsell-item'));
    // Updates:
    descriptionColumn.style.position="relative";
    
    if(!image.src.includes('nopicture')){
        imageColumn.childNodes[0].style.position = "absolute";
        imageColumn.childNodes[0].style.right = "35px";
        imageColumn.childNodes[0].style.width = "250px";
        imageColumn.childNodes[0].style.border = "1px #ccc solid";
        imageColumn.childNodes[0].style.borderRadius = "5px";
        imageColumn.childNodes[0].style.padding = "15px";
        descriptionColumn.prepend(imageColumn.childNodes[0]);
    }
   
    if(upsellItems.length > 0){
        let upsellProducts = document.querySelector('.upsell-products');
        for(let y = 0; y < upsellItems.length; y++){
            upsellItems[y].classList.remove('col-sm-3');
            upsellItems[y].classList.remove('col-sm-12');
        }
        updatedSidebarColumn.append(upsellProducts);
    }
    if(relatedProducts.length > 0){
        productGridItem.classList.remove('col-sm-3');
        relatedInnerContainer.style.minHeight = 'unset';
        relatedInnerContainer.classList.add('u-left');
        updatedSidebarColumn.append(relatedProducts[0]);
    }
        
    productContainer.append(updatedSidebarColumn);
    imageColumn.classList.add('u-hide');

}
export default updateEntityDropDownLayout;
  
  
    