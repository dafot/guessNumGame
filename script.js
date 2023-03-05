/*title*/
const gameTitle = document.querySelector(".game__title");
/* buttons */
const againBtn = document.querySelector(".game__btn");
const checkBtn = document.querySelector(".form__btn");

/* forms */
const secretNumArea = document.querySelector(".game__secret-num");
const enterForm = document.querySelector(".form__enter");

/* scores */
let scoresCount = document.querySelector(".game__scores");
let recordCount = document.querySelector(".game__record");
let question = document.querySelector(".question");

//function test() {
//  checkBtn.addEventListener("click", () => {
//    if (
//      typeof +enterForm.value === "number" &&
//      isNaN(enterForm.value) == false
//    ) {
//      console.log("вы ввели число");
//    } else {
//      console.log("вы ввели хуй пойми чаво");
//    }
//  });
//}
//test();

function mathRandom() {
  let random = Math.floor(Math.random() * 10);
  return random;
}

//function check() {
//  checkBtn.addEventListener("click", () => {
//    mathRandom();
//    if (+enterForm.value === mathRandom()) {
//      console.log("вы угадали число");
//      question.innerText = mathRandom();
//    } else {
//      console.log("вы ошиблись");
//      console.log(+enterForm.value);
//      console.log(mathRandom());
//    }
//  });
//}
let s = 0;
let r = 20;
scoresCount.innerText = `Счёт: ${s}`;
function check() {
  checkBtn.addEventListener("click", () => {
    let result = mathRandom();
    againBtn.addEventListener("click", () => {
      question.innerText = "?";
      enterForm.value = "";
      scoresCount.innerText = `Счёт: ${0}`
      recordCount.innerText = `Рекорд: ${20}`
    });
    if (enterForm.value == "") {
      console.log("вы не ввели число");
      question.innerText = "?";
      secretNumArea.style.border = "5px solid red";
      gameTitle.innerText = "Вы не ввели число!";
    } else if (enterForm.value == result) {
      console.log("вы угадали число");
      console.log(+enterForm.value);
      console.log(result);
      question.innerText = result;
      gameTitle.innerText = "Правильно!";
      secretNumArea.style.border = "5px solid green";
    } else if (enterForm.value != result) {
      if (s <= 20) {
        s++;
        r--;
        scoresCount.innerText = `Счёт: ${s}`;
        recordCount.innerText = `Рекорд: ${r}`;
        gameTitle.innerText = "Вы ошиблсиь!";
        question.innerText = "?";
        secretNumArea.style.border = "5px solid red";
      } else if (s => 20) {
        gameTitle.innerText = "Вы проиграли!";
        question.innerText = "?";
        secretNumArea.style.border = "5px solid red";
      } else {
        console.log("вы ошиблсиь");
        console.log(+enterForm.value);
        console.log(result);

      }
    }
  });
}
check();
