function parallax(){
    window.addEventListener('scroll', function(e){
        let parallaxEls = document.querySelectorAll('.parallax');
        if(parallaxEls.length > 0){
            parallaxEls.forEach((cur, idx)=>{
                let container = cur.parentNode;
                let containerHeight = container.offsetHeight;
                let spaceToTop = container.getBoundingClientRect().top;
                if((spaceToTop <= 0) && (spaceToTop > -containerHeight)){
                    let rateY = spaceToTop * cur.dataset.yscroll;
                    switch(cur.dataset.direction){
                        case 'vertical' : 
                        cur.style.transform = `translate3d(0px, ${rateY}px, 0px)`;
                        break;
                        case 'horizontal' :
                        let rateX = spaceToTop * cur.dataset.xscroll;
                        cur.style.transform = `translate3d(${rateX}px, ${rateY}px, 0px)`;
                        break;
                    }
                }
                else {
                    cur.style.transform = `translate3d(0px, 0px, 0px)`;
                }
            });
        }
    });
}
export default parallax;