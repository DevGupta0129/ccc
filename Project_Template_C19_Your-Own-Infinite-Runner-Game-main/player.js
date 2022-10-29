class Player {
    constructor(){
    
        this.playerName=   null
        this.index = null
    }

    getPlayerCount(){

        database.ref("playerCount").on(
            "value",(data)=>{
                playerCount = data.val()
            }
        )
    }

    playerCountUpdate(count){
            database.ref("/").update({playerCount:count})
    }

}