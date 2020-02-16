const deck = [];

function showDeck() {
    document.getElementById('card').innerHTML = deck.length;
}

function initializeDeck(){
       const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
       const suits = ['hearts','spades','clubs','diamonds'];
       for(let rank of values.split(',')){
           for(let suit of suits){
               deck.push({
                   rank,
                   suit
               })
           }
       }
       return console.log(deck);
}


function drawCard(n= 1) {
    const drawnCards = [];
    if(deck.length === 0){
        alert('Make Deck first');
    }
    else{
       if(n>1){
           for(let i=0;i<n;i++){
               drawnCards.push(deck.pop());
           }
           return drawnCards;
       }
       else{
           drawnCards.push(deck.pop());
           document.getElementById('card').innerHTML = `${drawnCards[0].rank} of ${ drawnCards[0].suit}`;
       }
    }
}

function drawMultiple(){
    let x = drawCard(3);
    console.log(x);
    x.map(item => {
        document.getElementById('multipleCards').innerHTML = `<h3>${item.rank} of ${item.suit}</h3>`;
    })
}

