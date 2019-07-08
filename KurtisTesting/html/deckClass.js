class Deck{

    static deck = []
    constructor(){
        this.ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        this.suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']

        for(let i in this.ranks){
            for(let j in this.suits){
                let card = new Card(this.ranks[i], this.suits[j])
                Deck.deck.push(card)
            }
        }


    }


    static draw(max){
        let index = Math.floor(Math.random()*Math.floor(max))
        return Deck.deck.splice(index, 1)
    }


}