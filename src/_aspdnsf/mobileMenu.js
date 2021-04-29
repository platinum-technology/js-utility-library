const menuItemHandler = () => {
    let menuItems = Array.from(document.getElementsByClassName('menu-item'));
    // only do this for mobile. 
    if(window.innerWidth <= 768){
        menuItems.forEach(cur => {
            cur.addEventListener('click', function () {
                toggleMenu(true);
                console.log('menu items was clicked');
            })
        })
    }
}
const toggleMenu = (menuItemClicked) => {
    let mobileMenu = document.getElementById('mobile-menu');
    let mobileToggle = document.getElementById('navbar-toggle');
    let mainContent = document.getElementById('main-content');
    let mobileMenuClassList = Array.from(mobileMenu.classList);
    let footer = document.getElementById('footer');
    let preFooter = document.getElementById('pre-footer');
    let toggleDOMContent = [mainContent, footer, preFooter]
    let allClasses = '';
    mobileMenuClassList.forEach(cur => {
        allClasses += cur + ' ';
    })
    if (allClasses.includes('u-hide') || menuItemClicked) {
        mobileToggle.classList.remove('collapsed');
        mobileMenu.classList.remove('u-hide');
        toggleDOMContent.forEach(cur => {
            cur.classList.add('u-hide');
        })
    } else {
        mobileToggle.classList.add('collapsed');
        mobileMenu.classList.add('u-hide');
        toggleDOMContent.forEach(cur => {
            cur.classList.remove('u-hide');
        })
    }
}
export const mobileMenu = {
    toggleMenu : toggleMenu,
    menuItemHandler : menuItemHandler
}

