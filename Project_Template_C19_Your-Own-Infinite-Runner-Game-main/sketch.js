//var gamestate = "start"
var form  , gameState,playerCount, database, player,game
var q_and_a_Json
function preload(){

   q_and_a_Json= loadJSON()

}

function setup() {
 createCanvas(800,600)
 database=firebase.database()
 game = new Game()
 quizPanel = new QuizPanel()
 game.start()
 game.getGameState()

}

function draw() {
    background("yellow") 
    
    if(playerCount===2){
       game.updateGameState(1)//gamestate play when all the players are logged in 

    }

    if(gameState===1){
       game.play()
    }

}