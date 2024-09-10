const cproContent = document.getElementById("cpro-content");
const agContent = document.getElementById("ag-content");

document.querySelector('#cpro-title').addEventListener('mouseover', function() {
    document.querySelector('#logo').src = 'images/logo/sezan1-black.png';
    document.querySelector('#logo').animate(
        [ { width: '32%' }, {  width: '15%' } ],
        { duration: 500, fill: 'forwards' }
    );
    document.querySelector('#logo').animate(
        [ { transform: 'translate(-50%, -50%)' }, { transform: 'translate(0, 0)' } ],
        { duration: 500, fill: 'forwards' }
    );
    document.querySelector('#logo').animate(
        [ { top: '50%' }, { top: '2%' } ],
        { duration: 500, fill: 'forwards' }
    );
    document.querySelector('#logo').animate(
        [ { left: '50%' }, { left: '78%' } ],
        { duration: 500, fill: 'forwards' }
    );
    document.querySelector('.agent').animate(
        [ { width: '50vw' }, { width: 0 } ],
        { duration: 500, fill: 'forwards' }
    );
    document.querySelector('#cpro-contents').animate(
        [ { opacity: 0 }, { opacity: 1 } ],
        { duration: 500, fill: 'forwards', delay: 300 }
    );
    document.querySelector('#cpro-contents').animate(
        [ { display: 'none' }, { display: 'flex' } ],
        { duration: 500, fill: 'forwards'}
    );
});

document.querySelector('#cpro-title').addEventListener('mouseleave', function() {
    document.querySelector('#logo').src = 'images/logo/sezan1-rev.png';
    document.querySelector('#logo').animate(
        [ { width: '15%' }, {  width: '32%' } ],
        { duration: 500, fill: 'forwards' }
    );
    document.querySelector('#logo').animate(
        [ { transform: 'translate(0%, 0%)' }, { transform: 'translate(-50%, -50%)' } ],
        { duration: 500, fill: 'forwards' }
    );
    document.querySelector('#logo').animate(
        [ { top: '2%' }, { top: '50%' } ],
        { duration: 500, fill: 'forwards' }
    );
    document.querySelector('#logo').animate(
        [ { left: '78%' }, { left: '50%' } ],
        { duration: 500, fill: 'forwards' }
    );
    document.querySelector('.agent').animate(
        [ { width: 0 }, { width: '50vw' } ],
        { duration: 500, fill: 'forwards' }
    );
    document.querySelector('#cpro-contents').animate(
        [ { opacity: 1 }, { opacity: 0 } ],
        { duration: 200, fill: 'forwards'}
    );
    document.querySelector('#cpro-contents').animate(
        [ { display: 'flex' }, { display: 'none' } ],
        { duration: 500, fill: 'forwards'}
    );
});


document.querySelector('#ag-title').addEventListener('mouseover', function() {
    document.querySelector('#logo').src = 'images/logo/sezan1-white.png';
    document.querySelector('#logo').animate(
        [ { width: '32%' }, {  width: '15%' } ],
        { duration: 500, fill: 'forwards' }
    );
    document.querySelector('#logo').animate(
        [ { transform: 'translate(-50%, -50%)' }, { transform: 'translate(0, 0)' } ],
        { duration: 500, fill: 'forwards' }
    );
    document.querySelector('#logo').animate(
        [ { top: '50%' }, { top: '2%' } ],
        { duration: 500, fill: 'forwards' }
    );
    document.querySelector('#logo').animate(
        [ { left: '50%' }, { left: '2%' } ],
        { duration: 500, fill: 'forwards' }
    );
    document.querySelector('.cproduction').animate(
        [ { width: '50vw' }, { width: 0 } ],
        { duration: 500, fill: 'forwards' }
    );
    document.querySelector('main').animate(
        [ { backgroundColor: 'white' }, { backgroundColor: 'black' } ],
        { duration: 1, fill: 'forwards'}
    );
    document.querySelector('#ag-contents').animate(
        [ { opacity: 0 }, { opacity: 1 } ],
        { duration: 500, fill: 'forwards', delay: 300 }
    );
    document.querySelector('#ag-contents').animate(
        [ { display: 'none' }, { display: 'flex' } ],
        { duration: 500, fill: 'forwards'}
    );
});

document.querySelector('#ag-title').addEventListener('mouseleave', function() {
    document.querySelector('#logo').src = 'images/logo/sezan1-rev.png';
    document.querySelector('#logo').animate(
        [ { width: '15%' }, {  width: '32%' } ],
        { duration: 500, fill: 'forwards' }
    );
    document.querySelector('#logo').animate(
        [ { transform: 'translate(0%, 0%)' }, { transform: 'translate(-50%, -50%)' } ],
        { duration: 500, fill: 'forwards' }
    );
    document.querySelector('#logo').animate(
        [ { top: '2%' }, { top: '50%' } ],
        { duration: 500, fill: 'forwards' }
    );
    document.querySelector('#logo').animate(
        [ { left: '2%' }, { left: '50%' } ],
        { duration: 500, fill: 'forwards' }
    );
    document.querySelector('.cproduction').animate(
        [ { width: 0 }, { width: '50vw' } ],
        { duration: 500, fill: 'forwards' }
    );
    document.querySelector('main').animate(
        [ { backgroundColor: 'black' }, { backgroundColor: 'white' } ],
        { duration: 1, fill: 'forwards' , delay: 500}
    );
    document.querySelector('#ag-contents').animate(
        [ { opacity: 1 }, { opacity: 0 } ],
        { duration: 200, fill: 'forwards'}
    );
    document.querySelector('#ag-contents').animate(
        [ { display: 'flex' }, { display: 'none' } ],
        { duration: 500, fill: 'forwards' }
    );
});