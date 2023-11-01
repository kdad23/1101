// card 為長度為12的NodeList 物件
const card = document.querySelectorAll('.card');
const front = document.querySelectorAll('.card-front');
const back = document.querySelectorAll('.card-back');
const container = document.querySelector('.game-container');
const timeRemaining = document.querySelector('#time-remaining');
const face = document.querySelectorAll('.card-face');

console.log(timeRemaining.innerHTML);
console.log(typeof timeRemaining.innerHTML);

// console.log(face);
//
// console.log(...Array(card.length).keys());

// Array(card.length)創造1個長度為card.length的空陣列
// card中的元素為名為cell的class 元素
suffleImage();
function suffleImage() {
    card.forEach(c => {
        // 產生1個陣列，[0,1,2,3,4,5,6,7,8,9,10,11]
        const num = [...Array(card.length).keys()];
        // console.log(typeof num);
        // console.log(num);
        // console.log(c);

        // 隨機生成 0-11 的數字，生成矩陣的index
        const random = Math.floor(Math.random() * card.length);

        // 將order屬性 設定在名為cell的class 區塊上
        c.style.order = num[random];

    })

}

clicking();
// countDownTime();
function clicking() {


    for (let i = 0; i < card.length; i++) {
        // 一開始，先讓全部的區塊同步顯示正面，過幾秒後全部的區塊同步翻到背面
        // 在front 區塊上新增名為show 的class，讓區塊顯示正面
        card[i].classList.add('visible');
        // back[i].classList.add('visible');

        let timeoutID = setInterval(() => {
            // front[i].classList.remove('visible');
            // back[i].classList.remove('visible');
            card[i].classList.remove('visible');
            console.log("51行setInterval執行次數");
            clearInterval(timeoutID);
        }, 1000);

        // clearInterval(timeoutID);


        // cell 區塊可以點擊
        card[i].addEventListener('click', () => {

            // 一按下去，馬上在front 的區塊新增 flip ，讓區塊朝向正面
            card[i].classList.add('visible');

            console.log("新增第1個visible");





            const filppedCard = document.querySelectorAll('.visible');
            // console.log("抓visible標籤");

            // console.log(filppedCard);

            console.log(filppedCard[0]);
            console.log("抓到第1個visible標籤");
            console.log(filppedCard[1]);
            console.log(filppedCard.length);





            // 
            





            // 當使用者按到剛好有2個區塊時，就做比較
            if (filppedCard.length === 2) {
                // none 的時候都不能點
                container.style.pointerEvents = 'none'

               



                // 過5秒後，可以點
                // setInterval(() => {
                //     container.style.pointerEvents='all';
                // }, 5000)
                console.log("if裡面");

                setTimeout(() => {
                    container.style.pointerEvents = 'auto';
                    console.log("setTimeout執行次數");

                }, 2000)




                match(filppedCard[0], filppedCard[1]);

            }

        })
    }
}



console.log(9999999999);



function match(cardOne, cardTwo) {

    console.log("執行match");


    if (cardOne.dataset.index == cardTwo.dataset.index) {
        // 在網頁上呈現分數增加
        // timeRemaining.innerHTML=parseInt(timeRemaining.innerHTML)-1;

        cardOne.classList.remove('visible');
        cardTwo.classList.remove('visible');

        // 配對成功，就在配對成功的區塊上新增名為match 的class屬性，讓配對的區塊顯示正面
        cardOne.classList.add('match');
        cardTwo.classList.add('match'); 
        console.log("配對成功");




       





    }
    else {
        setTimeout(() => {
            // 去除 flip ，讓區塊不要呈現正面
            cardOne.classList.remove('visible');
            cardTwo.classList.remove('visible');
        }, 1000);

        // let xxx=setInterval(() => 
        // {
        //     // 去除 flip ，讓區塊不要呈現正面
        //     cardOne.classList.remove('visible');
        //     cardTwo.classList.remove('visible');
        //     clearInterval(xxx);
        // }, 1000);

        console.log("Game OVER");




    }


}




// 
let countdownTime = 100;


function countDownTime() 
{
    let exitInterval =setInterval(()=>
    {

        
        countdownTime--;
        console.log(countdownTime);
        timeRemaining.innerHTML=`${countdownTime}`;
        
        
        // while(countdownTime>0)
        // {
            
        //     timeRemaining.innerHTML=countdownTime.toString();
        // }
        while(countdownTime===0)
        {
            clearInterval(exitInterval);
        }


    },1000);
}



















