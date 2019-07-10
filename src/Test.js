// new Deck()

const newDeck = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
// let getCard = `https://deckofcardsapi.com/api/deck/${fetchDeck(newDeck)}/draw/?count=`


document.addEventListener('DOMContentLoaded', ()=>{
    
    let startBtn = document.getElementById('start')
    let hitBtn = document.getElementById('hit')
    let stayBtn = document.getElementById('stay')
    let total = document.getElementById('total')
    hitBtn.style.display = 'none'
    stayBtn.style.display = 'none'
    total.style.display = 'none'

    startBtn.addEventListener('click', ()=>{
        hitBtn.style.display = 'inline'
        stayBtn.style.display = 'inline'
        getDeck(newDeck).then((deck)=> {
            UserHand.currentHand = []
           let user = new UserHand(deck.deck_id)
        })

    })

    hitBtn.addEventListener('click', ()=>{
        UserHand.currentHand[0].hit()
    })

    stayBtn.addEventListener('click', ()=>{
        UserHand.currentHand[0].stay()
        hitBtn.style.display = 'none'
        stayBtn.style.display = 'none'
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