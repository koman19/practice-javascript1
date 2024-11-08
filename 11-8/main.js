
const gameSelector = document.getElementById('game-selector');
const gameContainer = document.getElementByid('game-container');
gameContainer.textcontent-"ゲームを選ぶとここに表示します"
gameSelector.addEventListener("change",function(){
    gameContainer.innerHTML="";
    switch(gameSelector.value){
            case "none":
        gameContainer.textContent="ゲームを選ぶとここに表示されます"  
            break;
            case "click-counter":
                ClickCounterGame();
            break;
            case "number-guess":
            NumberGuessGame();   
            break;
            case "rock-paper-scissors":
                rps();   
                break;
    }
}) 



function ClickCounterGame(){

let count = 0;

let button1 = document.createElement("button");
button1.textContent ="+1ボタン";

let button2 = document.createElement("button");
button2.textContent ="+10ボタン";


let counter = document.createElement("p");
counter.textContent ="count";


button1.addEventListener("click" ,function(){

count++;
counter.textContent = count;







})

button1.addEventListener("click" ,function(){

    count10;
    counter.textContent = count;
    

})




gameConteiner.appendChild(button1);
gameConteiner.appendChild(button2);
gameConteiner.appendChild(counter);

}




