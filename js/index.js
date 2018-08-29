var imp = impress();

var arrowLeft = document.querySelector('#arrowLeft');
var arrowRight = document.querySelector('#arrowRight');


function clickLeft (e) {

    imp.prev();
    e.preventDefault();
    
}

function clickRight (e) {

    imp.next();
    e.preventDefault();
    
}

arrowLeft.addEventListener('click', clickLeft);
arrowRight.addEventListener('click', clickRight);


