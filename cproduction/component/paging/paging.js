window.onload = function() {
    document.querySelector('.paging-in').animate(
        [ { transform: 'rotateY(0deg)' }, { transform: 'rotateY(-90deg)' } ],
        { duration: 500, delay: 300 ,fill: 'forwards', easing: 'ease-in' }
    );
}