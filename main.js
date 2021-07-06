const changeSize = document.querySelector('span.mess-with-me');
changeSize.style.fontSize = '40px';

const changeColor = document.querySelector('p.mess-with-me');
changeColor.style.backgroundColor = 'green';

const makeInvisible = document.querySelector('#hide-me');
makeInvisible.style.display = 'none';

const imageSize = document.querySelector('#triceratops');
imageSize.style.width = '324px';

function fontColorChange() {
    const changeColor = document.querySelector('span.mess-with-me');
    changeColor.style.color = 'orange';
}

const click = document.querySelector('span.mess-with-me');
click.addEventListener('click', fontColorChange);

function addBorder() {
    const newBorder = document.querySelector('#triceratops');
    newBorder.style.border = 'solid red 1px';
}

const addNewBorder = document.querySelector('#triceratops');
addNewBorder.addEventListener('click', addBorder);

function makeTransparent() {
    const halfTransparent = document.querySelector('#feathers');
    halfTransparent.style.opacity = '.5';
}

const halfTransparent = document.querySelector("#feathers");
halfTransparent.addEventListener('click', makeTransparent);

function changeRowBackground() {
    const changeRow = document.querySelector('#row');
    // changeRow.style.backgroundColor = 'lightblue';
    if (changeRow.style.backgroundColor == '' || changeRow.style.backgroundColor == 'lightblue') {
        changeRow.style.backgroundColor = 'pink';
    } else {
        changeRow.style.backgroundColor = 'lightblue';
    }
}

const changeRow = document.querySelector("button");
changeRow.addEventListener('click', changeRowBackground);

function makeBigger() {
    const hoverBigger = document.querySelector('#biggify');
    hoverBigger.style.width = '200px';
}

function makeSmaller() {
    const hoverSmaller = document.querySelector('#biggify');
    hoverSmaller.style.width = '162px';
}

const hoverBigger = document.querySelector("#biggify");
hoverBigger.addEventListener('mouseover', makeBigger);
hoverBigger.addEventListener('mouseout', makeSmaller);