window.onload = function() {
    document.querySelector('.paging-in').animate(
        [ { transform: 'rotateY(0deg)' }, { transform: 'rotateY(-90deg)' } ],
        { duration: 500, delay: 300 ,fill: 'forwards', easing: 'ease-in-out' }
    );
}

function go(url) {
    console.log(url);

    document.querySelector('.paging').style.display = 'block';
    document.querySelector('.paging').animate(
        [ { transform: 'rotateY(90deg)' }, { transform: 'rotateY(0deg)' } ],
        { duration: 500, fill: 'forwards', easing: 'ease-in-out' }
    );
    setTimeout(() => {
        window.location.href = url;
    }, 600);
}