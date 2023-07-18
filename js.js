function gridMaker(silderValue){
        const container = document.createElement('div');
        container.classList.add("container");
        container.classList.add("rounded-border-gradient");
        const main = document.querySelector('.main');

for (var i = 0; i < silderValue; ++i) {
        var column = document.createElement('div'); // create column
        column.classList.add("column");
        for (var j = 0; j < silderValue; ++j) {
            var row = document.createElement('div'); // create row
            row.classList.add("square");
            
            row.style.background = "white";
            column.appendChild(row); // append row in column
        }
        container.appendChild(column); // append column inside container
}
main.appendChild(container);



let sliderText = document.querySelector(".slider-text");
sliderText.textContent = slider.value + "x" + slider.value;

}

function colorSelector(color){
        var messages = document.querySelectorAll(".square");
        for (var i = 0; i < messages.length; i++) {
        messages[i].addEventListener("mouseover", e=> {
                
                e.target.style.background = color;
                
        });
}
}



const slider = document.querySelector('.slider');
slider.addEventListener("input", function(){
        const container = document.querySelector('.container');
        console.log(slider.value);
        container.textContent = '';
        container.remove();
        gridMaker(slider.value);
})


gridMaker(slider.value);


let buttons = document.querySelectorAll(".button");
for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("mousemove", function(e){
                const x = e.pageX - e.target.offsetLeft
	        const y = e.pageY - e.target.offsetTop

	        e.target.style.setProperty('--x', `${ x }px`)
	        e.target.style.setProperty('--y', `${ y }px`)
        }) 
}

color = "#41729F";
colorSelector(color);

let blue = document.querySelector(".blue");
blue.addEventListener("click", function(){
        color = "#41729F";

        colorSelector(color);
})

let cyan = document.querySelector(".cyan");
cyan.addEventListener("click", function(){
        color = "#47b8b3";

        colorSelector(color);
})

let purple = document.querySelector(".purple");
purple.addEventListener("click", function(){
        color = "#474cb8";
        
        colorSelector(color);
})