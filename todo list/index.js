const input = document.querySelector("input");
const btn = document.querySelector('#btn');
const ulDiv = document.querySelector('.ul');
const ul = document.createElement('ul');
ulDiv.appendChild(ul);
input.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        const li = document.createElement('li');
        li.style.listStyleType = 'disc';
        li.innerText = e.target.value;
        ul.prepend(li);
        input.value = "";
    }
});

btn.addEventListener('click',function (e) {
    let inputValue = document.getElementById("inp").value;
    const li = document.createElement('li');
    li.style.listStyleType = 'disc';
    li.innerText = inputValue;
    ul.prepend(li);
    input.value = "";
});
