class QuizPanel {

    constructor (){

        this.buttonA= createButton()
        this.buttonB= createButton()
        this.buttonC= createButton()
        this.buttonD= createButton()
        this.text = createElement("h2")
    }


   positioningObjects(){

        this.buttonA.position(216,262)
        this.buttonB.position(600,262)
        this.buttonC.position(216,470)
        this.buttonD.position(600,470)
        this.text.position(240,81)
        this.text.html("In which Italian city can you find the Colosseum")

    }
}