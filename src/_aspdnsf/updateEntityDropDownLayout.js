import showInnerContent from './showInnerContent';

function updateEntityDropDownLayout(){
    showInnerContent(false);
    let productContainer = document.getElementById('product-container');
    let imageColumn = document.getElementById('product-image-column');
    let image = imageColumn.childNodes[0].childNodes[2].childNodes[1];
    let imageGallery = imageColumn.childNodes[0];
    let gridImages = Array.from(document.getElementsByClassName('grid-item-image-wrap'));
   
    // new html columns 
    let updatedSidebarColumn = document.createElement("div");
    let descriptionColumnInnerLeft = document.createElement("div");
    let descriptionColumnInnerRight = document.createElement("div");
    // arrange column vars
    let descriptionColumn = document.getElementById('product-description-column');
    let productInfo = descriptionColumn.childNodes[1];
    let variantInfo = descriptionColumn.childNodes[1].childNodes[5];
    let stockIndicator = descriptionColumn.childNodes[1].childNodes[1]


      // hide image column if there's no image. 
      if(image.src.includes('nopicture')){
        imageColumn.classList.add('u-hide');
   
     }


    let options = descriptionColumn.childNodes[1].childNodes[3];
    let optionsSelect = options.childNodes[2].childNodes[0];
    if(options && optionsSelect){
      
        let optionsSelectValue = optionsSelect.innerHTML;
        if (!optionsSelectValue){
             options.style.display = "none";
         }
     }

    descriptionColumn.style.position="relative";
    // changes the order of the elements than from original default
   

    // Update New Html Elements
    updatedSidebarColumn.classList.add('col-sm-4');
    updatedSidebarColumn.classList.add('updated-sidebar');
    descriptionColumnInnerLeft.style.float = "left";
    descriptionColumnInnerLeft.style.width = "25%";
    descriptionColumnInnerLeft.style.marginRight = "15px";
    descriptionColumnInnerRight.style.float = "left";
    descriptionColumnInnerRight.style.width = "70%";
    descriptionColumnInnerRight.style.position = "realative";
    descriptionColumnInnerRight.style.padding = "50px 15px 15px 15px";

    
    // changes the order of the elements than from original default
    if(gridImages.length > 0){
     
        for(let i = 0; i < gridImages.length; i++){
            let gridImg = gridImages[i].childNodes[0];
    
            if(gridImg.src.includes('nopictureicon.gif')){
                gridImg.style.display = 'none';
            }
        }
    }

    // related products
    let relatedProducts = Array.from(document.getElementsByClassName('related-products'));


    // upsell products
    let upsellItems = Array.from(document.getElementsByClassName('upsell-item'));
    
    // Updates:
    descriptionColumn.style.position="relative";
    // Create the new two column layout | Adds the right column and conteent
    descriptionColumnInnerRight.prepend(options)
    descriptionColumnInnerRight.append(stockIndicator)
    descriptionColumnInnerRight.append(variantInfo);
    descriptionColumnInnerRight.append(productInfo);
    descriptionColumn.prepend(descriptionColumnInnerRight);
   // Create the new two column layout | Adds the left column and conteent
    if(typeof image !== 'undefined'){
        if(!image.src.includes('nopicture')){
            imageColumn.childNodes[0].style.position = "absolute";
            imageColumn.childNodes[0].style.right = "35px";
            imageColumn.childNodes[0].style.width = "250px";
            imageColumn.childNodes[0].style.border = "1px #ccc solid";
            imageColumn.childNodes[0].style.borderRadius = "5px";
            imageColumn.childNodes[0].style.padding = "15px";
            // prepends the image if it is not blank
            descriptionColumnInnerLeft.prepend(image);
            descriptionColumn.prepend(descriptionColumnInnerLeft);
        }
    }
    else{
        // if there is an image gallery just move the whole container 
        // this column includes the image / image gallery. 
        descriptionColumnInnerLeft.prepend(imageGallery);
        descriptionColumn.prepend(descriptionColumnInnerLeft);
    }


    // Creates the updated sidebar column if applicable. 
    if(upsellItems.length > 0){
        let upsellProducts = document.querySelector('.upsell-products');
        for(let y = 0; y < upsellItems.length; y++){
            upsellItems[y].classList.remove('col-sm-3');
            upsellItems[y].classList.remove('col-sm-12');
        }
        updatedSidebarColumn.append(upsellProducts);
    }
    if(relatedProducts.length > 0){
        let relatedInnerContainer = relatedProducts[0].childNodes[7].childNodes[1].childNodes[1].childNodes[1];
        let productGridItem = relatedProducts[0].childNodes[7].childNodes[1].childNodes[1];
        productGridItem.classList.remove('col-sm-3');
        relatedInnerContainer.style.minHeight = 'unset';
        relatedInnerContainer.classList.add('u-left');
        updatedSidebarColumn.append(relatedProducts[0]);
    }
        
    productContainer.append(updatedSidebarColumn);
    imageColumn.classList.add('u-hide');
    showInnerContent(true);




}
export default updateEntityDropDownLayout;
  
  
    