// Math.Random
// console.log(Math.random()); // numbers from 0 to 1
// console.log(Math.random() * 10); // numbers from 0 to 10
// console.log(Math.random() * 100); // numbers from 0 to 100

// Math.round
// const num = 10.4 // 10
// const num2 = 5.5 // 6
// console.log(Math.round(num));
// console.log(Math.round(num2));

// Math ceil
// const num1 = 6.7 // 7
// const num3 = 6.4 // 7
// console.log(Math.ceil(num1));

// Math floor
// const number = 8.5 // 8
// console.log(Math.floor(number));

// const randomNumber = Math.floor(Math.random()*10)
// console.log(randomNumber);

const result = document.querySelector("#result");
const image = document.querySelector("#image")


function toss(selected) {
  // console.log(selected);
  let randomNumber = Math.ceil(Math.random() * 2);
  console.log(randomNumber);
  if (selected === "heads" && randomNumber === 1) {
    console.log("You won the Toss");
    result.innerHTML = "You won the Toss";
  } else if (selected === "Tails" && randomNumber === 2) {
    console.log("You won the toss");
    result.innerHTML = "You won the toss";
  } else {
    console.log("You loss the toss");
    result.innerHTML = "You loss the toss";
  }
  if(randomNumber === 1){
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZFJz8fBdB152cD8Z-C7bNuZE9PJ-NqVF0hw&s"

  }else{
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQdUzsQUAs4r94JoCtnBlHCs5_J5E_DnB0Yn4SxqHmoXiapje9Z9hR4-HfnrJHk7p1Ro&usqp=CAU"
  }
}
