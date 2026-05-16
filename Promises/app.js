console.log('hello world');


// function addmission(fees) {
//     return new Promise ((resolve , reject)=>{
//         setTimeout(() => {
//             if (fees >= 2000) {
//                 resolve('admission successful')
//             } else {
//                 reject('We are sorry')
//             }
//         }, 1000);
//     })
// }

// const executePromise = async () => {
//     try{
//         const result = await addmission(500)
//         console.log(result);
        
//     }catch(err){
//         console.log(err);
        
//     }
// }
// executePromise()




// function shadiSnz(bankbalance) {
//     return new Promise((resolve, reject) => {
//         if (bankbalance > 2000) {
//             resolve('Mubarak')
//         }else{
//             reject('cancel')
//         }
//     })
// }
// shadiSnz(10)
// .then((res)=>{
// console.log(res);

// }).catch((err)=>{
//     console.log(err);
    
// })


// Global scoping   It can be accessed and modified from anywhere in your script.

// let name = 'xys'

// function printNmae() {
//     console.log(name);
    
// }
// printNmae()




// function scope  always accesible only in the function
// function GreetUser() {
//     let user = 'behroz'
//     if (true) {
//         console.log(user);
        
        
//     }else{
//         console.log(user);
        
//     }
// }
// GreetUser()



// if (true) {
//   let myName = 'behroz'
//   console.log(myName);
// }
// console.log(myName);


// let city = 'quetta'   // globe scope
// function greetUser() {
//     let age = 18 // function scope

//     if (true) {
//        let name = ' behroz' // block scope
//        console.log(name);
       
//        console.log(age);
//     }
    
// }
// greetUser()
// console.log(city);



// optional chaining
// let user = {
//     name : 'behroz',
//     age : 19,
//     address : {
//         city : 'quetta',
//         street : 'brewery'
//     }
// }

// // let city = user && user.address && user.address.city


// let city = user?.address?.city
// console.log(city);



// array destructuring

// let nums = [10 , 20 , 30 , 50 , 60]

// let [first , second , third , fifty] = nums
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fifty);


// object destructuring

// let user = {
//     name : 'behroz',
//     age : 19,
//     address : {
//         city : 'quetta',
//         street : 'brewery'
//     }
// }
 
// let {name , address , age} = user

// console.log(name, address , age);


// let age = 17
// const status = age>= 18 ? 'adult' : 'minor';
// console.log(status);


// let num = 7
// const checkNum = num % 2 === 0 ? 'even' : 'odd';


// let number = 8
// const checkNum = number > 0 ? 'positive' : 'negative'
// console.log(checkNum);


// let marks = 40
// const checkMarks = marks >= 40 ? 'pass' : 'fail'
// console.log(checkMarks);


// let isLoggedIn = false
// const user = isLoggedIn ? 'welcome user' : 'please log in' 
// console.log(user);


// let a = 20;
// let b = 15;

// const nums = a > b ? '20 is greater' : '20 is not greater'
// console.log(nums);


// let hour = 16
// const checkHour = hour < 18 ? 'day' : 'night'
// console.log(checkHour);


let marks = 20;
const passingMarks = marks > 80 ? "A+" : marks > 50 ? "B+" : 'Fail'
console.log(passingMarks);





// IIFE
// (function (sum1 , sum2) {
//     console.log(sum1 + sum2);
    
// }) (20 , 40)
// Default Parameters

// function user(name = 'behroz') {
//     console.log(`my name is ${name}`);
    
// }
// user('abdullah')
// user()


// Rest Parametrs
// function sums(...numbers) {
//     let sum = 0
//     for (let i = 0; i < numbers.length; i++) {
//        sum += numbers[i]
        
//     }
//     console.log(sum);
    
    
// }
// sums(1 , 2 , 5 ,7 , 9 )


// function addNums(...numbers) {
//    return numbers.reduce((acc , cval)=>{
//       return   acc + cval
//     } , 0)    
    
// }


// console.log(addNums(20 , 40 , 60 ,38));

// Spread Operators

// let arr = [1, 2 ,5 ,7 , 8]
// let c = [...arr , 9 , 10 ]
// console.log(c);


let a = ['shabir' , 'alam' , 'junaid']
let b = ['ali' , 'wajid' , 'Uzair']
let allNames = [...a , ...b]
let upperCaseNames = allNames.map((name) => name.charAt(0).toUpperCase()+name.slice(1))
console.log(upperCaseNames);
