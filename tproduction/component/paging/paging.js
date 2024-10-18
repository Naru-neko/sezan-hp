window.onload = function() {
    console.log('onload');
    document.querySelector('.paging-in').animate(
        [ {opacity: 1}, {opacity: 0} ],
        { duration: 500, delay: 300 ,fill: 'forwards', easing: 'ease-in-out' }
    );
    setTimeout(() => {
        document.querySelector('.paging-in').style.display = 'none';
    }, 800);
}

function go(url) {
    document.querySelector('.paging').style.display = 'block';
    document.querySelector('.paging').animate(
        [ {opacity: 0}, {opacity: 1} ],
        { duration: 500, fill: 'forwards', easing: 'ease-in-out' }
    );
    setTimeout(() => {
        window.location.href = url;
    }, 600);
}