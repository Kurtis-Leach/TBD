class Hand {

    constructor(id){
        this.cards = []
        this.total = 0
        this.deck_id = id
        this.drawTwo(id)
        // this.cards.push(Deck.draw(Deck.deck.length))
        // this.cards.push(Deck.draw(Deck.deck.length))
        // for(let i in this.cards){
        //     if (this.cards[i][0].rank == 'K' || this.cards[i][0].rank == 'Q'||this.cards[i][0].rank == 'J'){
        //         this.total += 10
        //     }else if(this.cards[i][0].rank == ){

        //     }
        // }
    }

    hit(){
        // this.cards.push(Deck.draw(Deck.deck.length))
        // this.winCheck()
    }

    winCheck(){
        // for(let i in this.cards){
        //     console.log(this.cards[i][0].rank)
        // }
    }

    drawTwo(deck_id){
        fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`).then((res)=>{
        return res.json()
        }).then((res)=>{
            console.log(res.cards)
            for(let i in res.cards){
                this.cards.push(res.cards[i])
                if (res.cards[i].value == 'KING'||res.cards[i].value == 'QUEEN'||res.cards[i].value == 'JACK'){
                    // this.total += 10
                    this.totalIncrease(10)
                }else if(res.cards[i].value == 'ACE'){
                    this.totalIncrease(11)
                }else {
                    this.totalIncrease(Number(res.cards[i].value))
                }
            }

        })
    }

    totalIncrease(num){
        if (num == 11){
            let test = this.total + 11
            if(test > 21){
                this.total += 1
            }else {this.total = test}
        }else{ this.total += num}
        this.bustCheck()
    }

    bustCheck(){
        if(this.total >= 21){
            this.bust()
        }
    }

    bust(){
        UserHand.currentHand = []
        alert('You Lost Try Again')
    }

}