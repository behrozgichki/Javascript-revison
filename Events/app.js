const btn = document.querySelector("#btn");

// btn.addEventListener("click" , ()=>{
//     console.log("btn clicked");

// })

// function add(a , b) {
//     return a + b
// }
// btn.addEventListener('click' , ()=>{
//     console.log(add(15 , 5));

// })

// let img = document.querySelector("#img")
// const container = document.querySelector("#container")

// container.addEventListener('dblclick' , ()=>{
//     img.src = "https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D"
// })
// container.addEventListener('click' , ()=>{
//     img.src = "https://images.unsplash.com/photo-1543306983-a562d8739781?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
//     img.width = "200"
// })

// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// const secondchild = document.querySelector(".secondchild");

// parent.addEventListener("click", () => {
//   console.log("parent clicked");
// });

// child.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("child clicked");
//   // console.log(e.target);
// });
// secondchild.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("secondchild clicked");
// });

let bgColor = document.querySelector("#bgColor");
let lightMode = document.querySelector("#lightMode");



bgColor.addEventListener("click", () => {
  document.body.style.backgroundColor = changeBg();
});
function changeBg() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}


lightMode.addEventListener("click" , ()=>{
    document.body.style.backgroundColor = "#ffffff"
})

let form = document.querySelector("#form")

let inputOne = document.querySelector("#name")
let inputTwo = document.querySelector("#email")
let inputThree = document.querySelector("#password")


form.addEventListener('submit' , (e)=>{
    e.preventDefault()
    // console.log(e);

    let name = inputOne.value
    let email = inputTwo.value
    let password = inputThree.value

    let  user = {
        name,
        email,
        password
    }
    console.log(user);
    
})