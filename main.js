const buttons = document.querySelectorAll('.btn');
const p = document.querySelector('#demo');



const delete_btn = document.querySelector('.delbtn');
const space_btn = document.querySelector('.space');

let chars = [];

buttons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        p.textContent += btn.innerText;
    })
})

delete_btn.addEventListener('click', () => {
    chars = p.textContent.split('');
    chars.pop();
    p.textContent =chars.join('');
})

space_btn.addEventListener('click', () => {
    p.textContent += "  ";
    
})




 