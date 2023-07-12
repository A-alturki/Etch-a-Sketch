let num = prompt("enter number");

for(let i = 0;i < num**2;i++){
        const container = document.querySelector('.container');

const content = document.createElement('div');

content.classList.add('square');
content.style.height = container.height / num;
content.style.background = yellow;
content.style.width = container.width / num;
content.style.height = container.height / num;
content.style.background = yellow;

container.appendChild(content);
    }
