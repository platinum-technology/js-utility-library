function parallax(){
    window.addEventListener('scroll', function(e){
        let parallaxCons = document.querySelectorAll('.parallax-group');
        let parallaxEls = document.querySelectorAll('.parallax');
        let yScrolledDist = window.scrollY;
        if(parallaxEls.length > 0){
            parallaxEls.forEach((cur, idx)=>{
                let container = cur.parentNode;
                let containerHeight = container.offsetHeight;
                let spaceToTop = container.getBoundingClientRect().top;
                if((spaceToTop <= 0) && (spaceToTop > -containerHeight)){
                    let sectionScrolledDistance;  
                    let rateY = spaceToTop * cur.dataset.yscroll;
                    // console.log('RATE Y:', rateY);
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