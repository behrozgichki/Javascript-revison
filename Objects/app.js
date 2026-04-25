// const obj = {
//     name : "Behroz",
//     age : 17,
//     profession : "student",
//     email : "behroz@gmail.com"

// }
// delete obj.email

// obj.age = 19
// console.log(obj);
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.profession);
// console.log(obj.email);

// const users = {
//     name : {
//     firstName : "Zubair",
//     lastName : "Khan"
//     },
//     profession : {
//         student : "1st Year",
//         Job : "Part time ShopKeeper"
//     },
//     age : 19,
//     isLoggenIn : true
// }

// users.fullName = "Zubair Khan"
// console.log(users.name.firstName);
// console.log(users.isLoggenIn);
// console.log(users.fullName);

const container = document.querySelector(".container");

// let cars = [
// { "id": 1, "name": "Toyota Corolla", "year": 2022, "color": "White", "image": "https://img-ap-2.trovit.com/img2ae/LFi11i1Rh1y/LFi11i1Rh1y.1_11.jpg" },
//   { "id": 2, "name": "Honda Civic", "year": 2023, "color": "Black", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5yhwvqAw6TYccHr4XIE9_NXlFEqaoa0szPA&s" },
//   { "id": 3, "name": "Ford Mustang", "year": 2021, "color": "Red", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkAx1odJg6leyD0fed9R5eKfPfI4mcP-ZmPw&s" },
//   { "id": 4, "name": "Chevrolet Camaro", "year": 2022, "color": "Blue", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLsSvOH-KAG1QUFBfdnukTpozheaHLFIPGlw&s" },
//   { "id": 5, "name": "BMW 3 Series", "year": 2023, "color": "Gray", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOwQDkW8hE8v8tZBHm7i0mxxfG3qZ3wDvDg&s" },
//   { "id": 6, "name": "Mercedes-Benz C-Class", "year": 2022, "color": "Silver", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWeBNsIqaWpWxmlp-Pfgj83juSpEgIYxUjg&s" },
//   { "id": 7, "name": "Audi A4", "year": 2021, "color": "White", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiHt6iEvobEuyxMbdf5ya7tca78HiRJloptg&s" },
//   { "id": 8, "name": "Hyundai Elantra", "year": 2023, "color": "Blue", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oL59JTX3XkSdMuGwweRCv7nz7kMeeUX96A&s" },
//   { "id": 9, "name": "Kia Sportage", "year": 2022, "color": "Green", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_q8kdrYxungXi3JZuGdIyNqvqg6Ci6qSEg&s" },
//   { "id": 10, "name": "Nissan Altima", "year": 2023, "color": "Black", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO2pfA9LRT2gwzTDpioi22lB5bN92ipl1YrA&s" }
// ]

// for (let i = 0; i < cars.length; i++) {
//     container.innerHTML += `
//         <div class="car-card">
//             <img src="${cars[i].image}" alt="${cars[i].name}">

//             <div class="car-content">
//                 <h3 class="car-title">${cars[i].name}</h3>
//                 <p class="car-year">Model Year: ${cars[i].year}</p>

//                 <span class="car-color">${cars[i].color}</span>

//                 <br>

//                 <a href="#" class="btn">View Details</a>
//             </div>
//         </div>
//     `;
// }

let mobiles = [
  {
    model: "iPhone X",
    releaseYear: 2017,
    storageOptions: ["64GB", "256GB"],
    priceUSD: 999,
  },
  {
    model: "iPhone XR",
    releaseYear: 2018,
    storageOptions: ["64GB", "128GB", "256GB"],
    priceUSD: 749,
  },
  {
    model: "iPhone XS",
    releaseYear: 2018,
    storageOptions: ["64GB", "256GB", "512GB"],
    priceUSD: 999,
  },
  {
    model: "iPhone 11",
    releaseYear: 2019,
    storageOptions: ["64GB", "128GB", "256GB"],
    priceUSD: 699,
  },
  {
    model: "iPhone 12",
    releaseYear: 2020,
    storageOptions: ["64GB", "128GB", "256GB"],
    priceUSD: 799,
  },
  {
    model: "iPhone 12 Pro",
    releaseYear: 2020,
    storageOptions: ["128GB", "256GB", "512GB"],
    priceUSD: 999,
  },
  {
    model: "iPhone 13",
    releaseYear: 2021,
    storageOptions: ["128GB", "256GB", "512GB"],
    priceUSD: 799,
  },
  {
    model: "iPhone 13 Pro",
    releaseYear: 2021,
    storageOptions: ["128GB", "256GB", "512GB", "1TB"],
    priceUSD: 999,
  },
  {
    model: "iPhone 14",
    releaseYear: 2022,
    storageOptions: ["128GB", "256GB", "512GB"],
    priceUSD: 799,
  },
  {
    model: "iPhone 15",
    releaseYear: 2023,
    storageOptions: ["128GB", "256GB", "512GB", "1TB"],
    priceUSD: 799,
  },
];

for (let i = 0; i < mobiles.length; i++) {
  container.innerHTML += `
   <div>
    <h1>Name: ${mobiles[i].model}</h1>
    <h2>Release Year: ${mobiles[i].releaseYear}</h2>
    <h3>Storage: ${mobiles[i].storageOptions}</h3>
    <h4>Price: $${mobiles[i].priceUSD}</h4>
    </div>`;
}
