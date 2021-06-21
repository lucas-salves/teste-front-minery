window.onload = function(){
    let homepageScroll = new HomePageScroll();
    
    let navElements = document.getElementsByClassName('nav-elements');    

    
    navElements[1].addEventListener("click",function(){
        homepageScroll.scrollTo('LoremIpsum');
    });

    navElements[2].addEventListener("click",function(){
        homepageScroll.scrollTo('Phasellus');
    });

    navElements[3].addEventListener("click",function(){
        homepageScroll.scrollTo('Suspendisse');
    });

    
};

