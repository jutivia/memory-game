document.addEventListener('DOMContentLoaded', ()=>{
console.log('im in')
//card options
const cardArray=[
{
    name:'banana',
    img:'../../images/banana.jpg'
},
{
    name:'banana',
    img:'../../images/banana.jpg'
},
{
    name:'avocado',
    img:'../../images/avocado.jpg'
},
{
    name:'avocado',
    img:'../../images/avocado.jpg'
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
    img:'../../images/orange.jpg'
},
{
    name:'orange',
    img:'../../images/orange.jpg'
},
{
    name:'pawpaw',
    img:'../../images/pawpaw.jpg'
},
{
    name:'pawpaw',
    img:'../../images/pawpaw.jpg'
},
{
    name:'pineapple',
    img:'../../images/pineapple.jpg'
},
{
    name:'pineapple',
    img:'../../images/pineapple.jpg'
},
{
    name:'strawberry',
    img:'../../images/strawberry.jpg'
},
{
    name:'strawberry',
    img:'../../images/strawberry.jpg'
},
]


const grid= document.querySelector('.easyGrid');
cardArray.sort(()=>0.5-Math.random())
let cardsChosen=[]
let cardsChosenNameList=[]
let cardsWon=0;
let cardsMatched=[]
const timeLeft= document.querySelector('#time-left')
let currentTime= timeLeft.textContent;
 document.getElementById('result').textContent=0;
const startGame=()=>{
currentTime--
timeLeft.textContent= currentTime

if(currentTime >=0 && cardsMatched.length===cardArray.length){
    clearInterval(timerId)
    document.getElementById('gameStatus').textContent=`Congratulations! You've Matched All The Fruits. Your Best Time is ${60-currentTime} seconds`
}else if(currentTime===0 && cardsMatched.length <cardArray.length) {
     clearInterval(timerId)
    document.getElementById('gameStatus').textContent=`Game Over! You matched ${cardsMatched.length/2} fruits. Try Again!`
}
}

let timerId= setInterval(startGame,1000)
//creating game board
const createBoard=()=>{



for(let i=0; i<cardArray.length; i++){
    let card=document.createElement('img');
    card.setAttribute('src', '../../images/card-back.jpg');
    card.setAttribute('class', 'easyCards');
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
grid.appendChild(card);
} 

}
createBoard();
const matchedList=()=>{
 let content = document.getElementById('modal-content'); 
    content.style.display='none';
let blank='../../images/card-back.jpg'
let cards= document.querySelectorAll('img')
let a= cardsChosen[0]
let b=cardsChosen[1]
console.log(cardsChosenNameList)
 if(cardsChosenNameList.length===2 ){
    let optionA= cardsChosenNameList[0];
    let optionB= cardsChosenNameList[1];
    
    if(optionA!==optionB){
      content.style.display='block'
      content.textContent="Incorrect Match!"
      content.classList.add('open');
     
        setTimeout(()=>{
      cards[a].setAttribute('src', blank)
      cards[b].setAttribute('src', blank)
        
        },500)
         setTimeout(()=>{
           content.style.display='none'
         },2000)
       
    }else{
         content.textContent='You Made a Match!'
        cardsWon++
        cardsMatched.push(a,b)
        content.style.display='block'
        setTimeout(()=>{
           content.style.display='none'
         },2000)
    }
     cardsChosenNameList=[]
        cardsChosen=[]
    console.log(cardsMatched.length)
      document.getElementById('result').textContent=cardsWon
}


}
function flipCard(){
    let cardId = this.getAttribute('data-id');
    let cardsChosenName=cardArray[cardId]
    cardsChosen.push(Number(cardId));
    let cardName=cardsChosenName.name
    cardsChosenNameList.push(cardName)
        this.setAttribute('src', cardsChosenName.img)
   
  if((cardsChosen.length===2 || cardsChosenNameList===2 )&& (cardsChosen[0]===cardsChosen[1])){
       cardsChosen.pop();
       cardsChosenNameList.pop();
         }else if((cardsChosen.length===2 || cardsChosenNameList===2 )&& (cardsChosen[0]!==cardsChosen[1])){
             matchedList();
         }
         else if(cardsChosen.length>2 || cardsChosenNameList>2){
      cardsChosen.length=0;
      cardsChosenNameList.length=0;
     
  }
  
}

})