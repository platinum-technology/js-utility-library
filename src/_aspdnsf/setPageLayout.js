

function fluidPage() {
    let path = window.location.pathname;
    path.toLowerCase();
    let nonFluidRoutes = ['category', 'checkout', 'product', 'account', 'address', 'search', 'news'];
    let fluid = true;
    for (let i = 0; i < nonFluidRoutes.length; i++) {
        if (path.includes(nonFluidRoutes[i])) {
            console.log(path + ':' + nonFluidRoutes[i])
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
    console.log(isFluid);
    if (isFluid) {
        console.log('removed container')
        container.classList.remove('container');
    }
    else {
        container.classList.add('container');
    }
    innerContainer.style.display = 'block';
}
export default setPageLayout;