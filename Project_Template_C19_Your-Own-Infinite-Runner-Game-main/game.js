class Game {
    constructor (){
        this.leadeboardTitle = createElement("h2");

        this.leader1 = createElement("h2");
        this.leader2 = createElement("h2");
    }
    getGameState(){
        database.ref("gamestate").on("value",(data)=>{
             gameState= data.val ()
        })
    }
    start(){
        player= new Player ()
        playerCount= player.getPlayerCount()
        form = new Form() 
        form.display()
        
    }

    updateGameState(state){
        database.ref("/").update({gamestate:state})
    }


    handleElements(){

        this.leadeboardTitle.html("Leaderboard");
        this.leadeboardTitle.class("resetText");
        this.leadeboardTitle.position(width / 3 - 60, 40);

        this.leader1.class("leadersText");
        this.leader1.position(width / 3 - 50, 80);

        this.leader2.class("leadersText");
        this.leader2.position(width / 3 - 50, 130);
    }

    play(){
          this.handleElements()
          this.showLeaderboard()
          quizPanel.positioningObjects()

    }

    showLeaderboard() {

        var leader1, leader2;
           var players = Object.values(allPlayers);
           if (
             (players[0].rank === 0 && players[1].rank === 0) ||
             players[0].rank === 1
           ) {
             // &emsp;    This tag is used for displaying four spaces.
             leader1 =
               players[0].rank +
               "&emsp;" +
               players[0].name +
               "&emsp;" +
               players[0].score;
       
             leader2 =
               players[1].rank +
               "&emsp;" +
               players[1].name +
               "&emsp;" +
               players[1].score;
           }
       
           if (players[1].rank === 1) {
             leader1 =
               players[1].rank +
               "&emsp;" +
               players[1].name +
               "&emsp;" +
               players[1].score;
       
             leader2 =
               players[0].rank +
               "&emsp;" +
               players[0].name +
               "&emsp;" +
               players[0].score;
           }
       
           this.leader1.html(leader1);
           this.leader2.html(leader2);
         }
       
       

}