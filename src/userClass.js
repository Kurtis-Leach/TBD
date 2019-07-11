class UserHand extends Hand{

    
    constructor(id,dealer, stayBtn){
        let cardDiv = document.querySelector('.cards')
        let totalDiv = document.querySelector('#total')
        
        super(id, cardDiv, totalDiv)
        this.dealer = dealer
        this.stayBtn = stayBtn
        this.drawTwo(id)
        
        
    }

    bustCheck(){
            if (this.total >= 21){
                this.stayBtn.click()
            }
        
    }
    

}
