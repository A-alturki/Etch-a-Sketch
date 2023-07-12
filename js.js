let num = prompt("enter number");

for(let i = 0;i < num;i++){
        for(let j = 0; j < num; j++){
                const container = document.querySelector('.container');

                const content = document.createElement('div');
        
                content.classList.add('square');
                content.style.background = "yellow";
                container.appendChild(content);
        }
        
        const c = document.querySelector('.container');

        const co = document.createElement('hr');
        
        c.appendChild(co);


}
