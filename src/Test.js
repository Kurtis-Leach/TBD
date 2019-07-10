

const newDeck = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'



document.addEventListener('DOMContentLoaded', ()=>{
    
    let startBtn = document.getElementById('start')
    let hitBtn = document.getElementById('hit')
    let stayBtn = document.getElementById('stay')
    let total = document.getElementById('total')
    let dealerTotal = document.getElementById('dealer-total')

    let user; //grabs instance of UserHand
    let dealer;
    
    hitBtn.style.display = 'none'
    stayBtn.style.display = 'none'
    total.style.display = 'none'
    dealerTotal.style.display = 'none'
   

    startBtn.addEventListener('click', ()=>{
        hitBtn.style.display = 'inline'
        stayBtn.style.display = 'inline'
        getDeck(newDeck).then((deck)=> {
            user = new UserHand(deck.deck_id)
            dealer = new DealerHand(deck.deck_id)
        })

    })

    hitBtn.addEventListener('click', ()=>{
        user.hit()
    })

    stayBtn.addEventListener('click', ()=>{
        user.stay()
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