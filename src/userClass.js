class UserHand extends Hand{

    static currentHand = []
    constructor(id){
        let cardDiv = document.getElementsByClassName('cards')
        super(id, cardDiv)
        UserHand.currentHand.push(this)
        
    }

}