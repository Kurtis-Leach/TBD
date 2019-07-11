class DealerHand extends Hand{

       
    constructor(id){
        let cardDiv = document.querySelector('.dealers-cards')
        let totalDiv = document.querySelector('#dealer-total')
        
        super(id, cardDiv, totalDiv)
        
    }

}