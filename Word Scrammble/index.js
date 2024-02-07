const msg = document.querySelector(".msg");
const guess = document.querySelector("input")
const btn = document.querySelector(".btn")

let play = false;

let words = [
    "Above",	"Alike",	"Arise",	"Began",
    "Abuse",	"Alive",	"Array",	"Begin",
    "Actor",	"Allow",	"Aside",	"Begun",
    "Acute",	"Alone",	"Asset",	"Being",
    "Admit",	"Along",	"Audio",	"Below",
    "Adopt",	"Alter",	"Audit",	"Bench",
    "Adult",	"Among",	"Avoid",	"Billy"];

const createNewWords =()=>{
           let ranNum =  Math.floor(Math.random()*words.length);
           let newTempWords = words[ranNum];
           //console.log(words[ranNum])
           return newTempWords;
}

const scramble =(arr)=>{
    for(let i=arr.length; i>0; i--){
        let j = Math.floor(Math.random()*(i+1))

        let temp = arr[i];
        console.log(temp);

        arr[i] = arr[j];
        console.log(i);

        arr[j] = temp;
        console.log(j);

    }return arr;
}

btn.addEventListener('click',()=>{
    if(!play){
       play = true;
       btn.innerHTML = "GUESS";
       guess.classList.toggle('hidden');

       let newWords = createNewWords();
       console.log(newWords);
       let ranWords = scramble(newWords.split("")).join("");
       //console.log(ranWords.join(""));

       msg.innerHTML = ` Guess the word : ${ranWords}`;
    }
    else{
        let inputArea = guess.value;
        console.log(inputArea);
        if(inputArea == newWords){
          //console.log("correct");
          play = false;
          msg.innerHTML = ` Awesome it is correct ${newWords}`;

          btn.innerHTML = "Start Again";
          guess.classList.toggle('hidden');
          guess.value="";

        }else{
            console.log("incorrect");
            msg.innerHTML = ` Sorry Boss it is incorrect  it is ${newWords}`;


        }
    }
})