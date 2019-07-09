class Hand {

    constructor(id){
        this.cards = []
        this.total = 0
        this.deck_id = id
        this.drawTwo(id)
    }


    drawTwo(){
        fetch(`https://deckofcardsapi.com/api/deck/${this.deck_id}/draw/?count=2`).then((res)=>{
        return res.json()
        }).then((res)=>{
            console.log(res.cards)
            for(let i in res.cards){
                this.cardAdder(res.cards[i])
            }

        })
    }

    hit(){
        fetch(`https://deckofcardsapi.com/api/deck/${this.deck_id}/draw/?count=1`).then((res)=>{
        return res.json()
        }).then((res)=>{
            console.log(res.cards)
            for(let i in res.cards){
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


    totalIncrease(num){
        if (num == 11){
            let test = this.total + 11
            if(test > 21){
                this.total += 1
            }else {this.total = test}
        }else{ this.total += num}
        this.bustCheck()
        let total = document.getElementById('total')
        total.innerText = 'Total:  ' + this.total
        total.style.display = 'inline'
    }
    
    bustCheck(){
        if(this.total > 21){
            this.bust()
        }else if(this.total == 21){
            alert(`You Win!! You had ${this.total}`)
            UserHand.currentHand = []
        }
    }

    bust(){
        alert(`You Lost!! Your total was ${this.total}`)
        UserHand.currentHand = []
    }

    stay(){
        if (this.total <= 21){
            alert(`You Win!! You had ${this.total}`)
        }
    }
}