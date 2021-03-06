import showInnerContent from './showInnerContent';
function updateSimpleProductLayout (){
    showInnerContent(false);
    var imageColumn = document.getElementById('product-image-column');
    var infoColumn = document.getElementById('product-info-column');
    var image = imageColumn.childNodes[0].childNodes[2].childNodes[1];


    // hide image column if there's no image. 
    if(image.src.includes('nopicture')){
        imageColumn.classList.add('u-hide');
        infoColumn.classList.remove('col-sm-8');
        infoColumn.classList.add('u-center-block');
    }
    showInnerContent(true);
}
export default updateSimpleProductLayout;