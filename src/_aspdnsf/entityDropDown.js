function updateEntityDropDownLayout(){
    var productContainer = document.getElementById('product-container');
    var imageColumn = document.getElementById('product-image-column');
    var image = imageColumn.childNodes[0].childNodes[2].childNodes[1];
    var descriptionColumn = document.getElementById('product-description-column');
    console.log(imageColumn);
    var gridImages = Array.from(document.getElementsByClassName('grid-item-image-wrap'));
    // new html column 
    var updatedSidebarColumn = document.createElement("div");
    updatedSidebarColumn.classList.add('col-sm-4');
    updatedSidebarColumn.classList.add('updated-sidebar')
    for(var i = 0; i &lt; gridImages.length; i++){
        var gridImg = gridImages[i].childNodes[0];

        if(gridImg.src.includes('nopictureicon.gif')){
            gridImg.style.display = 'none';
        }
    }
    // related products
    var relatedProducts = Array.from(document.getElementsByClassName('related-products'));
    console.log(relatedProducts);
    var relatedInnerContainer = relatedProducts[0].childNodes[7].childNodes[1].childNodes[1].childNodes[1];
    var productGridItem = relatedProducts[0].childNodes[7].childNodes[1].childNodes[1];
    // upsell products
    var upsellItems = Array.from(document.getElementsByClassName('upsell-item'));
    // Updates:
    descriptionColumn.style.position="relative";
    imageColumn.childNodes[0].style.position = "absolute";
    imageColumn.childNodes[0].style.right = "35px";
    imageColumn.childNodes[0].style.width = "250px";
    imageColumn.childNodes[0].style.border = "1px #ccc solid";
    imageColumn.childNodes[0].style.borderRadius = "5px";
    imageColumn.childNodes[0].style.padding = "15px";
    descriptionColumn.prepend(imageColumn.childNodes[0]);

    if(upsellItems.length > 0){
        var upsellProducts = document.querySelector('.upsell-products');
        for(var y = 0; y &lt; upsellItems.length; y++){
            upsellItems[y].classList.remove('col-sm-3');
            upsellItems[y].classList.remove('col-sm-12');
        }
        updatedSidebarColumn.append(upsellProducts);
    }
    if(relatedProducts.length > 0){
        console.log('REALTED PRODUCTS');
        productGridItem.classList.remove('col-sm-3');
        relatedInnerContainer.style.minHeight = 'unset';
        relatedInnerContainer.classList.add('u-left');
        updatedSidebarColumn.append(relatedProducts[0]);
    }
        
    productContainer.append(updatedSidebarColumn);
    imageColumn.classList.add('u-hide');

}
export default updateEntityDropDownLayout;
  
  
    