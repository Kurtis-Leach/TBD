class Hand {

    constructor(){
        this.cards = []
        this.cards.push(Deck.draw(Deck.deck.length))
        this.cards.push(Deck.draw(Deck.deck.length))
    }

    hit(){
        this.cards.push(Deck.draw(Deck.deck.length))
    }

}
let string = 'hello'
console.log(string + 'n')