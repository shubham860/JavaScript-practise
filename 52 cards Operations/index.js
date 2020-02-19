let deck = [];

function showDeck() {
    document.getElementById('card').innerHTML = `Cards Left in Deck : ${deck.length}`;
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
       return  [alert('Deck is ready you can shuffle it'), console.log(deck)]
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
    x.map((item,index) => {
        let div = document.createElement("div");
        let para = document.createElement("h2");
        let node = document.createTextNode( `${item.rank} of ${item.suit}`);
        para.appendChild(node);
        div.appendChild(para)
        document.getElementById('multipleCards').appendChild(div);
    })
}


function shuffle(){
    for(let i = deck.length-1;i>0;i--){
        let j = Math.floor(Math.random() * (i+1));
        [deck[i],deck[j]] = [deck[j],deck[i]];
    }
    return  [console.log(deck),alert("Shuffled !")];
}


function resets() {
    deck = [];
    document.getElementById('multipleCards').innerHTML = '';
    document.getElementById('card').innerHTML = '';
}
