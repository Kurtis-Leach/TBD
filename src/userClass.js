class UserHand extends Hand{

    
    constructor(id,dealer){
        let cardDiv = document.querySelector('.cards')
        let totalDiv = document.querySelector('#total')
        
        super(id, cardDiv, totalDiv)
        this.dealer = dealer
        this.drawTwo(id)
        
        
    }
    

}
