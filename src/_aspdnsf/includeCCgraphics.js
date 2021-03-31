// This was created in the event we do not have access to the core ASPDNSF files. 
// PTG was requested to add the CC graphics to the checkout page, but we did not have directory access to this portion of the project. 
// this is called on the closing body tag of the theme files. 
import themeConfig from '../config/theme';

const includeCCGraphics = () => {
    window.addEventListener('load', function () {
        let path = window.location.pathname;
        if (path.includes('checkout') || path.includes('checkoutcreditcard')) {
            let visaIconPath = '/skins/'+ themeConfig.baseDirectory +'/images/visa.gif';
            let mcIconPath = '/skins/'+ themeConfig.baseDirectory +'/images/mastercard.gif';
            let discoverIconPath = '/skins/'+ themeConfig.baseDirectory +'/images/discover.gif';
            let amexIcontPath = '/skins/'+ themeConfig.baseDirectory +'/images/amex.gif';
            let ccIconPaths = [visaIconPath, mcIconPath, discoverIconPath, amexIcontPath];
            let ccContainer = document.createElement('div');
            ccContainer.classList.add('u-flex-center');
            ccIconPaths.forEach(path => {
                let icon = document.createElement('img');
                icon.classList.add('u-pad-sm');
                icon.style.width = "25px";
                icon.style.marginRight = "5px";
                icon.src = path;
                ccContainer.prepend(icon);
            })
            ccContainer.style.width = "auto";
            ccContainer.style.height = "25px";
            // CC detail Page
            if (path.includes('checkoutcreditcard')) {
                let mainContainer = document.getElementsByClassName('credit-card-secured-form')[0];
                ccContainer.style.width = "120px";
                mainContainer.childNodes[1].insertAdjacentHTML('afterEnd', ccContainer.outerHTML);
            }
            // CC Checkout page. 
            else {
                let paymentHeader = document.getElementsByClassName('payment-method')[0];
                ccContainer.style.position = 'absolute';
                ccContainer.style.left = '135px';
                ccContainer.style.top = '15px';
                paymentHeader.classList.add('u-relative');
                paymentHeader.prepend(ccContainer);

            }
        }
    });
}
export default includeCCGraphics;