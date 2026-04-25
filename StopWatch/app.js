setTimeout(function () {
    console.log('running in timeout');
    
}, 2000)
// setInterval(function(){
//     console.log('running in interval');
    
// }, 3000)

// const add = (a , b) =>{
//     return a + b
// }
// console.log(add(45, 70));

// setTimeout(() => {
    
// }, timeout);

const timer = document.querySelector("#timer")

let ms = 0
let seconds = 0;
let minutes = 0;
let hours = 0;

let interval= null;
function format(value) {
    if(value < 10){
        return "0" + value
    }
    return String(value)
}

function start() {
    if (interval !== null) return
   interval = setInterval(() => {

        ms++;
        if (ms === 100) {
            ms = 0
            seconds++
        }
        if (seconds === 60) {
            seconds = 0
            minutes++
        }
        if (minutes === 60 ) {
            minutes = 0
            hours++
        }
        timer.innerHTML = `${format(hours)} : ${format(minutes)} : ${format(seconds)} : ${format(ms)}`
    }, 10);



}
function stop(){
clearInterval(interval)
interval = null
console.log('stop');

}
function reset() {
    clearInterval(interval)
     interval = null
     ms = 0
    seconds =  0
    minutes = 0
    hours = 0

    timer.innerHTML = `00 : 00 : 00 : 00`
}