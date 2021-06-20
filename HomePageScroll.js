class HomePageScroll {
    scrollTo(element){
        if (element == 'LoremIpsum'){
            document.querySelector('.front-page-call-to-action-container').scrollIntoView({behavior: 'smooth'});
        }
        if (element == 'Phasellus'){
            document.querySelector('.frontpage-benefits-container').scrollIntoView({behavior: 'smooth'});
        }
        if (element == 'Suspendisse'){
            /**
             * This method is different than other ones because the footer
             * section is wider than the screen width and cannot scroll horizontally
             */
            window.scrollTo({
                top: document.querySelector('.frontpage-footer-wrapper').offsetTop,
                behavior: 'smooth',
            });
        }
    }
}