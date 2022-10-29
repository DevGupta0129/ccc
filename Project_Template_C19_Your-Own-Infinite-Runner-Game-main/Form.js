class Form {
    constructor(){
        this.input= createInput().attribute('placeholder', "Enter name ")
    this.button = createButton("Sumbit")
    this.text = createElement("h2")
    }

    displayedObjects(){
    this.input.position(385,250)
    this.button.position(400,270)
    this.text.position(385,250)
    }

    clickButton(){
        this.button.mouseClicked(()=>{
            this.button.hide()
            this.input.hide()
            var name = this.input.value ()
            var greeting = `Hi ,${name} please wait for more players to join `
            this.text.html(greeting)
            playerCount = playerCount +1
            player.index = playerCount
            player.playerCountUpdate(playerCount)

        })

    }

    display(){

    this.displayedObjects()
    this.clickButton()
    }
    }