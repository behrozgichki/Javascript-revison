// const users = [
//   { id: 1, name: "Ali", age: 21, city: "Quetta" },
//   { id: 2, name: "Sara", age: 19, city: "Karachi" },
//   { id: 3, name: "Ahmed", age: 25, city: "Lahore" },
//   { id: 4, name: "Ayesha", age: 22, city: "Islamabad" },
//   { id: 5, name: "Usman", age: 24, city: "Peshawar" },
//   { id: 6, name: "Zainab", age: 20, city: "Multan" },
//   { id: 7, name: "Hassan", age: 23, city: "Faisalabad" },
//   { id: 8, name: "Fatima", age: 18, city: "Quetta" },
//   { id: 9, name: "Bilal", age: 26, city: "Hyderabad" },
//   { id: 10, name: "Noor", age: 21, city: "Sukkur" },
// ];

// 1. Print all user names from the array.
// 1 : // for (let i = 0; i < users.length; i++) {
//     console.log(users[i].name);

// }

// 2. Print all users’ ages.
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i].age);
// }

// 3. Print users whose age is greater than 20.
// for (let i = 0; i < users.length; i++) {

//     if (users[i].age > 20) {
//         console.log(users[i].age);

//     }
// }

// 4. Print users who are from "Quetta".
// for(i = 0; i < users.length; i++){
//     if (users[i].city.toLowerCase() === "quetta") {
//         console.log(users[i]);

//     }
// }

// 5. Print each user in this format: `"Name is Age years old"`.
// for (let i = 0; i < users.length; i++) {
//     console.log(` ${users[i].name} is ${users[i].age} years old`);

// }

// 6. Count total number of users using a loop.
// let count = 0
// for (let i = 0; i < users.length; i++) {
//     count++
// }
// console.log(count);

// 7. Find and print the user with `id = 5`.
// for (let i = 0; i < users.length; i++) {
//     if (users[i].id === 5) {
//         console.log(users[i]);

//     }
// }

// 8. Create a new array containing only user names.
// const names = []
// for (let i = 0; i < users.length; i++) {
//     names.push(users[i].name)

// }
// console.log(names);

// 9. Print users whose age is between 18 and 25.
// for (let i = 0; i < users.length; i++) {
//    if (users[i].age > 18 && users[i].age < 25) {
//     console.log(users[i]);

//    }

// }

// 10. Print all user details one by one using a loop.
// const details = document.querySelector("#usersDetails");

// for (let i = 0; i < users.length; i++) {
//     details.innerHTML += `
//         <div class="user-card">
//             <p class="user-id">ID: ${users[i].id}</p>
//             <h2 class="user-name">${users[i].name}</h2>
//             <p class="user-info">Age: ${users[i].age}</p>
//             <p class="user-info">City: ${users[i].city}</p>
//         </div>
//     `;
// }
