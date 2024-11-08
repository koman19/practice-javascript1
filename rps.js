function rps(){

const choices = ["gu","choki","pa"];



let select = document.createElement('select');
choices.forEach(choice => {

let option = document.createElement('option');

option.value =choice;
option.textContent = choice;
select.appendChild(select);






});

gameContainer.appendChild(select);
}