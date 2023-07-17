
const slider = document.querySelector('.slider');
slider.addEventListener("input", function(){
        const container = document.querySelector('.container');
        console.log(slider.value);
        container.textContent = '';
        container.remove();
        gridMaker(slider.value);
})
let num = slider.value;

function gridMaker(silderValue){
        const container = document.createElement('div');
        container.classList.add("container");
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



var messages = document.querySelectorAll(".square");
for (var i = 0; i < messages.length; i++) {
        messages[i].addEventListener("mouseover", e=> {
                
                e.target.style.background = "#5885AF";
                
                
        });
}

}

gridMaker(slider.value);