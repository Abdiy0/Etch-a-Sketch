


const title = document.querySelector('.title');





const containerDiv = document.querySelector('.container');

const button = document.querySelector('.button');





function createCanvas(){
let size = prompt(' How many boxes do you want to create ?');

while( Number(size) > 100){
    alert("Number is too large, try again")
    size = prompt(' How many boxes do you want to create ?');
}


 containerDiv.innerHTML = '';

for (let i = 0; i < Number(size); i++) {
    // Create a row div
    const row = document.createElement("div");
    row.classList.add("row"); // Optionally, add a class for styling purposes

    for (let j = 0; j < Number(size); j++) {
        // Create a column div
        const div = document.createElement("div");
        div.classList.add("grid");
        row.appendChild(div);
    }

   
    containerDiv.appendChild(row);
}

const grid = document.querySelectorAll(".grid");


grid.forEach((g) => {

    g.addEventListener("mouseover", function(e)  {

   
         if (e.target.classList.contains("grid")) {
       e.target.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    
   
});

});
}

button.addEventListener("click",createCanvas);





