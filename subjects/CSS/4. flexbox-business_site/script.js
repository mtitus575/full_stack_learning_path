let basketButton = document.getElementById('basket');

const alertMessage = () => {
    alert('You have nothing in your basket yet.');
};

basketButton.onclick = alertMessage;

let itemHover = document.getElementsByClassName('item')[0];
const hoverItem = () => {
    itemHover.style.color = 'purple';
};
itemHover.onclick = hoverItem;