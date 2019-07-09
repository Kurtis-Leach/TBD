// new Deck()

const newDeck = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
// let getCard = `https://deckofcardsapi.com/api/deck/${fetchDeck(newDeck)}/draw/?count=`


document.addEventListener('DOMContentLoaded', ()=>{
    let startBtn = document.createElement('button')
    startBtn.innerText = 'Start'
    document.body.append(startBtn)

    startBtn.addEventListener('click', ()=>{
        getDeck(newDeck).then((deck)=> {
            UserHand.currentHand = []
           new UserHand(deck.deck_id)
        
        })

    })


    
})



function getDeck(deckUrl){
let fet = fetch(deckUrl)
    .then(rsp => rsp.json())
   return fet
}  
        


function dealCards(url, num){
    let address = url + num
    fetch(address)
    .then(rsp => rsp.json())
    .then(result => {
        console.log(result)
    })
}