const colors = ['red','blue','green','yellow','pink','black','brown','indigo','purple','grey','cyan','orange'];

const container = document.createElement('section');
container.classList.add('section');
const h1 = document.createElement('h1');
document.body.appendChild(h1);
document.body.prepend(container);


const changeColor = function () {
    container.style.border = `10px solid ${this.style.backgroundColor}`;
    h1.innerText = this.style.backgroundColor;
    h1.style.color = this.style.backgroundColor;
};

for(let color of colors){
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = color;
    box.innerText = color;
    container.appendChild(box);
    box.addEventListener('click',changeColor)
}


