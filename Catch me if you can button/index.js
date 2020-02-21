const btn = document.createElement('button');
btn.classList.add('yo');
btn.innerText = "Click me if u can";
btn.style.color = "white";
btn.style.backgroundColor = "black";
document.body.prepend(btn);

btn.addEventListener('mouseover',function () {
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);

    btn.style.top = `${x}px`;
    btn.style.left = `${y}px`;
});

