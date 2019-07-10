class UserHand extends Hand{

    
    constructor(id){
        let cardDiv = document.querySelector('.cards')
        let totalDiv = document.querySelector('#total')
       
        super(id, cardDiv, totalDiv)
        
        
    }
    

}
