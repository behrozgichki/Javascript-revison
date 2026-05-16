console.log('Heelo duniya');


const div = document.querySelector(".container")

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then((res)=>{
//     res.map((item)=>{
//         div.innerHTML += ` <div class="children">
//         <h1>Name:${item.name}</h1>
//         <h2>Phone Number :${item.phone}</h2>
//         <h3>Email :${item.email}</h3>
//     </div>`
//     })
//     console.log(res);
    
// }).catch((err)=>{
//     console.error(err);
    
// })


fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((res)=>{
    console.log(res);
    res.products.map((item)=>{
        div.innerHTML += `<div class="product-card">

            <div class="rating">
                ⭐ ${item.rating}
            </div>

            <img 
                src="${item.thumbnail}" 
                alt="${item.title}"
                class="product-image"
            >

            <div class="product-content">

                <span class="category">
                    ${item.category}
                </span>

                <h2 class="product-title">
                    ${item.title}
                </h2>

                <p class="product-description">
                    ${item.description}
                </p>

                <div class="product-footer">

                    <h3 class="price">
                        $${item.price}
                    </h3>

                    <button 
                        class="add-btn"
                        onclick="addToCart(${item.id})"
                    >
                        Add To Cart
                    </button>

                </div>

            </div>

        </div>
`
    })
    
}).catch((err)=>{
    console.error(err);
    
})