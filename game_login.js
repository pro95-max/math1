function adduser(){
    player1=document.getElementById("player1").value;
    localStorage.setItem("player1_name",player1);
    player2=document.getElementById("player2").value;
    localStorage.setItem("player2_name",player2);
    window.location="game_page.html";
}