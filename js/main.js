function opener() {
    document.querySelector(".up-left").animate(
        [ { transform: ' translateY(0%)' }, { transform: ' translateY(-100%)' } ],
        { duration: 700, fill: 'forwards' ,delay: 1000}
    );
    document.querySelector(".up-left").animate(
        [ { opacity: 1 }, { opacity: 0 } ],
        { duration: 700, fill: 'forwards' ,delay: 1000}
    );
    document.querySelector(".down-right").animate(
        [ { transform: ' translateY(0%)' }, { transform: ' translateY(100%)' } ],
        { duration: 700, fill: 'forwards' ,delay: 1000}
    );
    document.querySelector(".down-right").animate(
        [ { opacity: 1 }, { opacity: 0 } ],
        { duration: 700, fill: 'forwards' ,delay: 1000}
    );
    setTimeout(() => {
        document.querySelector(".up-left").style.display = 'none';
        document.querySelector(".down-right").style.display = 'none';
    }, 1700);
}

function closer() {
    document.querySelector(".up-left").style.display = 'block';
    document.querySelector(".down-right").style.display = 'block';
    document.querySelector(".up-left").animate(
        [ { transform: ' translateY(-100%)' }, { transform: ' translateY(0%)' } ],
        { duration: 700, fill: 'forwards'}
    );
    document.querySelector(".up-left").animate(
        [ { opacity: 0 }, { opacity: 1 } ],
        { duration: 700, fill: 'forwards'}
    );
    document.querySelector(".down-right").animate(
        [ { transform: ' translateY(100%)' }, { transform: ' translateY(0%)' } ],
        { duration: 700, fill: 'forwards'}
    );
    document.querySelector(".down-right").animate(
        [ { opacity: 0 }, { opacity: 1 } ],
        { duration: 700, fill: 'forwards'}
    );
}

function lineOpen(which) {
    document.querySelector(which + " .humburger-line:nth-child(1)").animate(
        [ { rotate: '0deg' }, { rotate: '-765deg' } ],
        { duration: 700, fill: 'forwards' ,delay: 1000}
    );
    document.querySelector(which + " .humburger-line:nth-child(2)").animate(
        [ { rotate: '0deg' }, { rotate: '-765deg' } ],
        { duration: 700, fill: 'forwards', delay: 1000}
    );
}

function lineClose(which) {
    document.querySelector(which + " .humburger-line:nth-child(1)").animate(
        [ { rotate: '-765deg' }, { rotate: '0deg' } ],
        { duration: 700, fill: 'forwards' }
    );
    document.querySelector(which + " .humburger-line:nth-child(2)").animate(
        [ { rotate: '-765deg' }, { rotate: '0deg' } ],
        { duration: 700, fill: 'forwards' }
    );
}

document.querySelector("#drawer-input").addEventListener("click", function() {
    const mediaQuery = window.matchMedia('(max-width: 1250px)')
    if (document.querySelector("#drawer-input").checked) {
        document.querySelector(".tpro-content").style.display = "none";

        document.querySelector(".tpro").animate(
            [{ opacity: 1 }, { opacity: 0 }],
            { duration: 200, fill: 'forwards'}
        );
        document.querySelector(".touch").animate(
            [{ opacity: 1 }, { opacity: 0 }],
            { duration: 200, fill: 'forwards'}
        );
        document.querySelector(".logo").animate(
            [{ opacity: 1 }, { opacity: 0 }],
            { duration: 700, fill: 'forwards', delay: 300}
        );
        opener();
        lineOpen('.cpro');
        setTimeout(() => {
            document.querySelector(".tpro").style.display = "none";
            document.querySelector(".touch").style.display = "none";
            document.querySelector(".logo").style.display = "none";
        }, 1000);
    } else {
        document.querySelector(".tpro").style.display = "block";
        document.querySelector(".touch").style.display = "flex";
        document.querySelector(".logo").style.display = "block";
        document.querySelector(".tpro").animate(
            [{ opacity: 0 }, { opacity: 1 }],
            { duration: 200, fill: 'forwards' ,delay: 700}
        );
        document.querySelector(".touch").animate(
            [{ opacity: 0 }, { opacity: 1 }],
            { duration: 200, fill: 'forwards' ,delay: 700}
        );
        document.querySelector(".logo").animate(
            [{ opacity: 0 }, { opacity: 1 }],
            { duration: 300, fill: 'forwards', delay: 900}
        );
        setTimeout(() => {
            if (mediaQuery.matches) {
                document.querySelector(".tpro-content").style.display = "flex";
            } else {
                document.querySelector(".tpro-content").style.display = "block";
            }
        }, 1000);
        lineClose('.cpro');
        closer();
    }
});

document.querySelector("#drawer-input2").addEventListener("click", function() {
    const mediaQuery = window.matchMedia('(max-width: 1250px)')
    if (document.querySelector("#drawer-input2").checked) {
        document.querySelector(".cpro-content").style.display = "none";

        document.querySelector(".cpro").animate(
            [{ opacity: 1 }, { opacity: 0 }],
            { duration: 200, fill: 'forwards'}
        );
        document.querySelector(".tpro .touch").animate(
            [{ opacity: 1 }, { opacity: 0 }],
            { duration: 200, fill: 'forwards'}
        );
        document.querySelector(".logo").animate(
            [{ opacity: 1 }, { opacity: 0 }],
            { duration: 700, fill: 'forwards', delay: 300}
        );
        opener();
        lineOpen('.tpro');
        setTimeout(() => {
            document.querySelector(".cpro").style.display = "none";
            document.querySelector(".tpro .touch").style.display = "none";
            document.querySelector(".logo").style.display = "none";
        }, 1000);
    } else {
        document.querySelector(".cpro").style.display = "block";
        document.querySelector(".tpro .touch").style.display = "flex";
        document.querySelector(".logo").style.display = "block";
        document.querySelector(".cpro").animate(
            [{ opacity: 0 }, { opacity: 1 }],
            { duration: 200, fill: 'forwards' ,delay: 700}
        );
        document.querySelector(".tpro .touch").animate(
            [{ opacity: 0 }, { opacity: 1 }],
            { duration: 200, fill: 'forwards' ,delay: 700}
        );
        document.querySelector(".logo").animate(
            [{ opacity: 0 }, { opacity: 1 }],
            { duration: 300, fill: 'forwards', delay: 900}
        );
        setTimeout(() => {
            if (mediaQuery.matches) {
                document.querySelector(".cpro-content").style.display = "flex";
            } else {
                document.querySelector(".cpro-content").style.display = "block";
            }
        }, 1000);
        lineClose('.tpro');
        closer();
    }
});