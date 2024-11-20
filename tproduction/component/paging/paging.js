window.onload = function() {
    document.querySelector('.paging-in').animate(
        [ {opacity: 1}, {opacity: 0} ],
        { duration: 500, delay: 300 ,fill: 'forwards', easing: 'ease-in-out' }
    );
    setTimeout(() => {
        document.querySelector('.paging-in').style.display = 'none';
    }, 800);
}