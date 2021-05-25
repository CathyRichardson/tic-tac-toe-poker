console.log('the house always wins');

let card = document.getElementById(cardId);
let color = document.getElementById(cardStyle);

console.log("cardID: ", card, "cardStyle: ", color);

function setCard() {
    let card = document.getElementById(cardId.value);
    card.style.color = cardStyle.value;
    console.log(card);
}

function reset() {
    // document.querySelectorAll("section").forEach( e => {console.log("e: ", e)});
    document.querySelectorAll("section").forEach( e => {e.style.color = "grey"});
}