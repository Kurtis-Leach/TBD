class Hand {

    constructor(id, cardDiv, totalDiv){
        this.cardDiv = cardDiv
        this.totalDiv = totalDiv
        this.cardDiv.innerHTML = ''
        this.cards = []
        this.total = 0
        this.deck_id = id
        this.drawTwo(id)

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
        fetch(`https://deckofcardsapi.com/api/deck/${this.deck_id}/draw/?count=1`).then((resp)=>{
        return resp.json()
        }).then((res)=>{
            for(let i in res.cards){
                this.cardImgToScreen(res.cards[i])
                this.cardAdder(res.cards[i])
            }

        })
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
        let cardImg = document.createElement('img')
        cardImg.src = card.image
        cardImg.className = 'card-imgs'
        this.cardDiv.appendChild(cardImg)
        
    }


    totalIncrease(num){
        if (num == 11){
            let test = this.total + 11
            if(test > 21){
                this.total += 1
            }else {this.total = test}
        }else{ this.total += num}
        this.bustCheck()
        this.totalDiv.innerText = 'Total:  ' + this.total
        this.totalDiv.style.display = 'inline'
        
    }
    
    bustCheck(){
        if(this.total > 21){
            this.bust()
        }else if(this.total == 21){
            alert(`You Win!! You had ${this.total}`)
            //this.cardDiv.innerHTML = ''
            
        }
    }

    bust(){
        alert(`You Lost!! Your total was ${this.total}`)
        //this.cardDiv.innerHTML = ''
        
    }

    stay(){
        if (this.total <= 21){
            alert(`You Win!! You had ${this.total}`)
            this.cardDiv.innerHTML = ''
        }
    }
}