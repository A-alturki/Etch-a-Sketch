let num = prompt("enter number");

const container = document.querySelector('.container');
const main = document.querySelector('.main');
for (var i = 0; i < num; ++i) {
        var column = document.createElement('div'); // create column
        column.classList.add("column");
        for (var j = 0; j < num; ++j) {
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
