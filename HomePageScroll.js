class HomePageScroll {
    scrollTo(element){     
        element == 'LoremIpsum' ? this.scroll('.front-page-call-to-action-container') : null;
        element == 'Phasellus' ? this.scroll('.frontpage-benefits-container') :  null;
        element == 'Suspendisse' ? this.scrollOnlyYAxis('.frontpage-footer-wrapper') : null;
    }

    scroll(element){
        document.querySelector(element).scrollIntoView({behavior: 'smooth'});
    }

    scrollOnlyYAxis(element){
        window.scrollTo({
            top: document.querySelector(element).offsetTop,
            behavior: 'smooth',
        });
    }
}