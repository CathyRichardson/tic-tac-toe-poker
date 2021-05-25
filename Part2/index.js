console.log('the house always wins');

let card = document.getElementById(cardId);
let color = document.getElementById(cardStyle);

console.log("cardID: ", card, "cardStyle: ", color);

function setCard(params) {
    let card = document.getElementById(cardId.value);
    card.style.color = cardStyle.value;
    console.log(card);
}