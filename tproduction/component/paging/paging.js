window.onload = function() {
    document.querySelector('.paging-in').animate(
        [ {opacity: 1}, {opacity: 0} ],
        { duration: 500, delay: 300 ,fill: 'forwards', easing: 'ease-in-out' }
    );
    setTimeout(() => {
        document.querySelector('.paging-in').style.display = 'none';
    }, 800);
}

// function go(e) {
//     var url = e.getAttribute('href');
//     console.log(e);
//     document.querySelector('.paging').style.display = 'block';
//     document.querySelector('.paging').animate(
//         [ { transform: 'rotateY(90deg)' }, { transform: 'rotateY(0deg)' } ],
//         { duration: 500, fill: 'forwards', easing: 'ease-in' }
//     );
//     setTimeout(() => {
//         window.location.href = url;
//     }, 600);
//     return false;
// }