class Deck{

    static deck = []
    constructor(){
       

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