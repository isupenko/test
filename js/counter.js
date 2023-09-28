// const btnMinus = document.querySelector ('[data-action="minus"]');
// const btnPlus = document.querySelector ('[data-action="plus"]');

// const counter = document.querySelector ('[data-counter]');

// btnMinus.addEventListener('click', function() {
//     console.log('Minus Click');

//     if (parseInt(counter.innerText) > 1) {
//         counter.innerText = --counter.innerText;
//     }
    
// });

// btnPlus.addEventListener('click', function() {
//     console.log('Plus Click');

//     counter.innerText = ++counter.innerText;
// });

window.addEventListener ('click', function(e) {

    let counter;

    if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
        const counterWrapper = e.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    }

    
    if(e.target.dataset.action === 'plus') {

        counter.innerText = ++counter.innerText;
    };

    if(e.target.dataset.action === 'minus') {

        if (parseInt(counter.innerText) > 1) {
                counter.innerText = --counter.innerText;
            }

    };
})