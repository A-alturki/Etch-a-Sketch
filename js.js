let num = prompt("enter number");

const container = document.querySelector('.container');
for (var i = 0; i < num; ++i) {
        var column = document.createElement('div'); // create column
        column.classList.add("column");
        for (var j = 0; j < num; ++j) {
            var row = document.createElement('div'); // create row
            row.classList.add("square");
            
            row.style.background = "yellow";
            column.appendChild(row); // append row in column
        }
        container.appendChild(column); // append column inside container
    }
document.body.appendChild(container);

function mouseDown(e) {
        e.innerHTML = "The mouse button is held down.";
}

var messages = document.querySelectorAll(".square");
for (var i = 0; i < messages.length; i++) {
        messages[i].addEventListener("mousedown" && "mouseover", e=> {
                console.log(e.target);
                e.target.style.background = 'red';
                
                
        });
}
