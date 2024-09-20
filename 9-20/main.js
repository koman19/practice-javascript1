
function changeColor(){


document.getElementById("text").style.color = "red";


}



//document.getElementById("text").style.color = "red";
/*これは、ドキュメントの中の「text」というIDを待っている
タグのスタイルの色を赤にしてください。*/

//document.querySelector("h1").style.color = "red"


let count = 1;

function increaseCount(){




count=count*2;

document.getElementById("counter").innerText = count;



}




function herasuCount(){




count=count/2;

document.getElementById("counter").innerText = count;


}




function aiuCount(){




    count=count+1;
    
    document.getElementById("counter").innerText = count;
    
    
    }


