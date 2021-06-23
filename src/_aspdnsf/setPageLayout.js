

function fluidPage() {
    let path = window.location.pathname;
    path.toLowerCase();
    let nonFluidRoutes = ['category', 'checkout', 'product', 'account', 'address', 'search', 'news'];
    let fluid = true;
    for (let i = 0; i < nonFluidRoutes.length; i++) {
        if (path.includes(nonFluidRoutes[i])) {
            fluid = false;
            break;
        }
    }
    return fluid;
}
function setPageLayout() {
    var innerContainer = document.getElementById('inner-container');
    var container = document.getElementById('inner-container');
    var isFluid = fluidPage();
;
    if (isFluid) {
        container.classList.remove('container');
    }
    else {
        container.classList.add('container');
    }
    innerContainer.style.display = 'block';
}
export default setPageLayout;