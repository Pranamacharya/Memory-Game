document.addEventListener('DOMContentLoaded',()=>{

    const cardArray=[
        {
            name:'bread',
            img:'Images/bread.png'
        },
        {
            name:'cheese',
            img:'Images/cheese.png'
        },
        {
            name:'cherry',
            img:'Images/cherry.png'
        },
        {
            name:'pokeball',
            img:'Images/pokeball.png'
        },
        {
            name:'cherry',
            img:'Images/cherry.png'
        },
        {
            name:'cheese',
            img:'Images/cheese.png'
        },
        {
            name:'pokeball',
            img:'Images/pokeball.png'
        },
        {
            name:'bread',
            img:'Images/bread.png'
        }
    ]
    cardArray.sort(()=>0.5-Math.random())

    const grid=document.querySelector('.grid')
    const resultDisplay=document.querySelector('#result')
    var cardsChosen=[]
    var cardsChosenId=[]
    var cardsWon=[]

    function createBoard(){
        for (let i=0;i<cardArray.length;i++){
            var card=document.createElement('img')
            card.setAttribute('src','Images/questions.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch(){
        var cards=document.querySelectorAll('img')
        const optionOneId=cardsChosenId[0]
        const optionTwoId=cardsChosenId[1]
        if(cardsChosen[0]===cardsChosen[1]){
            alert('you found a match')
            cards[optionOneId].setAttribute('src','Images/variation.png')
            cards[optionTwoId].setAttribute('src','Images/variation.png')
            cards[optionOneId].removeEventListener('click',flipCard)
            cards[optionTwoId].removeEventListener('click',flipCard)
            cardsWon.push(cardsChosen)
        }
        else{
            cards[optionOneId].setAttribute('src','Images/questions.png')
            cards[optionTwoId].setAttribute('src','Images/questions.png')
            alert('sorry,try again')
        }
        cardsChosen=[]
        cardsChosenId=[]
        resultDisplay.textContent=cardsWon.length
        if(cardsWon.length===cardArray.length/2){
            resultDisplay.textContent='Congratulations! you found them all'
        }

    }
    function flipCard(){
        var cardId=this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
        if(cardsChosen.length===2){
            setTimeout(checkForMatch,500)
    }

}





    createBoard()




})