const topshow = function() {
    document.querySelector('.part1').animate(
        [ { opacity: 0 }, { opacity: 1 } ],
        { duration: 500, fill: 'forwards', delay: 500 }
    )
    document.querySelector('.part1').animate(
        [ { display: 'none' }, { display: 'flex' } ],
        { duration: 500, fill: 'forwards', delay: 500 }
    )
    document.querySelector('.part2').animate(
        [ { opacity: 0 }, { opacity: 1 } ],
        { duration: 500, fill: 'forwards', delay: 500 }
    )
    document.querySelector('.part2').animate(
        [ { display: 'none' }, { display: 'flex' } ],
        { duration: 500, fill: 'forwards', delay: 500 }
    )

    document.querySelector('.part1').animate(
        [ { opacity: 1 }, { opacity: 0 } ],
        { duration: 500, fill: 'forwards', delay: 6000 }
    )
    document.querySelector('.part1').animate(
        [ { display: 'flex' }, { display: 'none' } ],
        { duration: 500, fill: 'forwards', delay: 6000 }
    )
    document.querySelector('.part2').animate(
        [ { opacity: 1 }, { opacity: 0 } ],
        { duration: 500, fill: 'forwards', delay: 6000 }
    )
    document.querySelector('.part2').animate(
        [ { display: 'flex' }, { display: 'none' } ],
        { duration: 500, fill: 'forwards', delay: 6000 }
    )




    document.querySelector('.part3').animate(
        [ { opacity: 0 }, { opacity: 1 } ],
        { duration: 500, fill: 'forwards', delay: 6500 }
    )
    document.querySelector('.part3').animate(
        [ { display: 'none' }, { display: 'flex' } ],
        { duration: 500, fill: 'forwards', delay: 6500 }
    )
    document.querySelector('.part4').animate(
        [ { opacity: 0 }, { opacity: 1 } ],
        { duration: 500, fill: 'forwards', delay: 6500 }
    )
    document.querySelector('.part4').animate(
        [ { display: 'none' }, { display: 'flex' } ],
        { duration: 500, fill: 'forwards', delay: 6500 }
    )

    document.querySelector('.part3').animate(
        [ { opacity: 1 }, { opacity: 0 } ],
        { duration: 500, fill: 'forwards', delay: 12000 }
    )
    document.querySelector('.part3').animate(
        [ { display: 'flex' }, { display: 'none' } ],
        { duration: 500, fill: 'forwards', delay: 12000 }
    )
    document.querySelector('.part4').animate(
        [ { opacity: 1 }, { opacity: 0 } ],
        { duration: 500, fill: 'forwards', delay: 12000 }
    )
    document.querySelector('.part4').animate(
        [ { display: 'flex' }, { display: 'none' } ],
        { duration: 500, fill: 'forwards', delay: 12000 }
    )
};


topshow();

setInterval(topshow, 12000);

