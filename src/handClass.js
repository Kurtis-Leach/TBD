class Hand {

    static all = []

    constructor(id, cardDiv, totalDiv){
        this.cardDiv = cardDiv
        this.totalDiv = totalDiv
        this.cardDiv.innerHTML = ''
        this.cards = []
        this.total = 0
        this.deck_id = id
        this.winAlert = document.querySelector('#winner')
        //this.winner = document.querySelector('.win-banner')


    }


     drawTwo(){
        fetch(`https://deckofcardsapi.com/api/deck/${this.deck_id}/draw/?count=2`).then((resp)=>{
        return resp.json()
        }).then((res)=>{
            for(let i in res.cards){
                this.cardAdder(res.cards[i])
                this.cardImgToScreen(res.cards[i])
            }
        })
    }

    hit(){
        let fet =fetch(`https://deckofcardsapi.com/api/deck/${this.deck_id}/draw/?count=1`).then((resp)=>{
        return resp.json()
        }).then((res)=>{
            for(let i in res.cards){
                this.cardImgToScreen(res.cards[i])
                this.cardAdder(res.cards[i])
            }

        })
        return fet
    }

    cardAdder(card){
        this.cards.push(card)
            if (card.value == 'KING'||card.value == 'QUEEN'||card.value == 'JACK'){
                this.totalIncrease(10)
            }else if(card.value == 'ACE'){
                this.totalIncrease(11)
            }else {
                this.totalIncrease(Number(card.value))
            }
    }

    cardImgToScreen(card){
        setTimeout(()=>{
            let cardImg = document.createElement('img')
            cardImg.src = card.image
            cardImg.className = 'card-imgs'
            this.cardDiv.appendChild(cardImg)
            cardPullSound()
        }, 1000)
        
        
    }


    totalIncrease(num){
        if (num == 11){
            let test = this.total + 11
            if(test > 21){
                this.total += 1
            }else {this.total = test}
        }else{ this.total += num}
        if (this instanceof UserHand){
            
            this.bustCheck()
        }
        // this.winCheck()
        this.totalDiv.innerText = 'Total:  ' + this.total
        this.totalDiv.style.display = 'inline'
        
    }

    bustCheck(){
        
            if (this.total >= 21){
                this.stay()
            }
        
    }
    
    winCheck(){
        if(this.total > 21 && this.dealer.total <= 21){
            
            setTimeout(() => { this.winAlert.innerHTML = "You Lose!"}, 1000)
            //alert(`You Lose!! You had ${this.total}. You Busted`)
        }else if(this.total <= 21 && this.dealer.total > 21){
            
            setTimeout(()=> this.winAlert.innerHTML = "You Win!", 1000)
            //alert(`You Win!! You had ${this.total}. Dealer Busted`)
        }else if(this.total > 21 && this.dealer.total > 21){
            setTimeout(() => { this.winAlert.innerHTML = "You Tie!"}, 1000)
            // alert(`Tie!! You and the Dealer Busted`)
        }else if(this.total > this.dealer.total){
            
             setTimeout(()=> this.winAlert.innerHTML = "You Win!", 1000)
            //alert(`You Win!! You had ${this.total}`)
        }else if(this.total < this.dealer.total){
            
            setTimeout(() => { this.winAlert.innerHTML = "You Lose!"}, 1000)
            //alert(`You Lose!! You had ${this.total}`)
        }else if(this.total == this.dealer.total){
            setTimeout(() => { this.winAlert.innerHTML = "You Tie!"}, 1000)
            // alert(`Tie!! You had ${this.total}`)
        }

    }

    bust(){
        
        setTimeout(() => { this.winAlert.innerHTML = "You Lose!"}, 1000)
        
    }

    stay(){
        
        
           
            //this.winAlert.innerHTML = "You Win! <img src='http://pixelartmaker.com/art/d1e16859c09183b.png'>"
            
            
       

        this.dealer.play(this)

    }
}

