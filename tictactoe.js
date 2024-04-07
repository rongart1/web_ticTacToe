let player1Turn = true;
let lastPlayer;
function turn(clicked_id){
    let id =clicked_id;
    if(player1Turn&&document.getElementById(id).innerHTML==""){
        document.getElementById(id).innerHTML="X";
    }
    else if(document.getElementById(id).innerHTML==""){
        document.getElementById(id).innerHTML="O";
    }
    if(player1Turn){
        lastPlayer="player1"
    }
    else{
        lastPlayer="player2"
    }
    player1Turn =!player1Turn; //switches the turn

    if(isWin()){
        console.log(lastPlayer," won");
        disableBoard();
    }
    else if(isDraw()){
        console.log("draw");
        disableBoard();
    }
    
}
function isWin(){
    const winCombos =[
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [7,5,3]
    ];
    for(let combo of winCombos){
        const[a,b,c] = combo;
        const cellA = document.getElementById(a).innerHTML;
        const cellB = document.getElementById(b).innerHTML;
        const cellC = document.getElementById(c).innerHTML;

        if (cellA === cellB && cellB === cellC && cellA !== "") {
            return true;
        }
    }
    return false;   
}

function disableBoard(){
    for(let i =1; i<=9; i++){
        document.getElementById(i).disabled=true;
    }
}
function isDraw(){
    let full =true
    for(let i =1; i<=9; i++){
        if(document.getElementById(i).innerHTML==""){
            full=false;
            break;
        }
    }
    return full;
}

function reset(){
    for(let i =1; i<=9; i++){
        document.getElementById(i).disabled=false;
        document.getElementById(i).innerHTML="";
        player1Turn=true;
    }
}