const showInnerContent = (state) => {
    let ic = document.getElementById('inner-container');
    state ? ic.classList.remove('u-hide') : ic.classList.remove('u-hide');
}
export default showInnerContent;