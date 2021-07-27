document.addEventListener('DOMContentLoaded', ()=>{
console.log('im in')
//card options
const cardArray=[
{
    name:'banana',
    img:'images/banana.jpg'
},
{
    name:'banana',
    img:'images/banana.jpg'
},
{
    name:'avocado',
    img:'images/avocado.jpg'
},
{
    name:'avocado',
    img:'images/avocado.jpg'
},
// {
//     name:'eggplant',
//     img:'images/eggplant.jpg'
// },
// {
//     name:'eggplant',
//     img:'images/eggplant.jpg'
// },
{
    name:'orange',
    img:'images/orange.jpg'
},
{
    name:'orange',
    img:'images/orange.jpg'
},
{
    name:'pawpaw',
    img:'images/pawpaw.jpg'
},
{
    name:'pawpaw',
    img:'images/pawpaw.jpg'
},
{
    name:'pineapple',
    img:'images/pineapple.jpg'
},
{
    name:'pineapple',
    img:'images/pineapple.jpg'
},
{
    name:'strawberry',
    img:'images/strawberry.jpg'
},
{
    name:'strawberry',
    img:'images/strawberry.jpg'
},
]


const grid= document.querySelector('.grid');
cardArray.sort(()=>0.5-Math.random())
let cardsChosen=[]
let cardsChosenNameList=[]
let cardsWon=0;
 document.getElementById('result').textContent=0;

//creating game board
const createBoard=()=>{



for(let i=0; i<cardArray.length; i++){
    let card=document.createElement('img');
    card.setAttribute('src', 'images/card-back.jpg');
    card.setAttribute('class', 'cards');
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
grid.appendChild(card);
} 

}
createBoard();
const matchedList=()=>{
    
let blank='images/card-back.jpg'
let cards= document.querySelectorAll('img')

console.log(cardsChosen)
if(cardsChosenNameList.length===2){
    let optionA= cardsChosenNameList[0];
    let optionB= cardsChosenNameList[1];
    let a= cardsChosen[0]
    let b=cardsChosen[1]
    if(optionA!==optionB){
        console.log('incorrect match')
        setTimeout(()=>{
            
      cards[a].setAttribute('src', blank)
      cards[b].setAttribute('src', blank)
        //  document.getElementById(cardsChosen[1]).src='images/card-back.jpg'
        
        },500)
       
    }else{
        console.log('correct match')
        cardsWon++
    }
    cardsChosenNameList=[]
        cardsChosen=[]
      document.getElementById('result').textContent=cardsWon
}
}
function flipCard(){
    let cardId = this.getAttribute('data-id');
    console.log(cardId)
    
    let cardsChosenName=cardArray[cardId]
    cardsChosen.push(Number(cardId));
    let cardName=cardsChosenName.name
    console.log(cardName)
    cardsChosenNameList.push(cardName)
        this.setAttribute('src', cardsChosenName.img)
    
   setTimeout( matchedList, 500);
}

})