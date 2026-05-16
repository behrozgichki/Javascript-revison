const getCartItems = JSON.parse(localStorage.getItem("cartItem"));
console.log(getCartItems);
const cartItems = getCartItems;

const checkOutContainer = document.querySelector("#checkout-container");
const totalAmmount = document.querySelector(".total-ammount")

function renderCheckoutItems() {
  checkOutContainer.innerHTML = "";
  getCartItems.map((item) => {
    checkOutContainer.innerHTML += `
    <div class="checkout-card">

                <div class="checkout-info">
                    <h3>${item.name}</h3>
                    <p>${item.category}</p>
                </div>

                <div class="checkout-right">

                    <h2>$${item.price}</h2>

                    <div class="quantity-controls">

                        <button 
                            class="quantity-btn"
                            onclick="changeQuantity('less', ${item.id})"
                        >
                            -
                        </button>

                        <span class="quantity-text">
                            ${item.quantity}
                        </span>

                        <button 
                            class="quantity-btn"
                            onclick="changeQuantity('add', ${item.id})"
                        >
                            +
                        </button>

                    </div>

                     <div class="item-total">$${item.quantity * item.price}</div>

                </div>

            </div>

            `;
  });

  const total = getCartItems.reduce((acc , cval)=>{
    return acc + cval.quantity * cval.price
}, 0) 
totalAmmount.innerHTML = total
}


 renderCheckoutItems()


function changeQuantity(quantity , id) {
    console.log(quantity);

    const index = getCartItems.findIndex((item)=> item.id === id)
    console.log(index);
    
    if (quantity === 'add') {
        getCartItems[index].quantity += 1
    } else {
        if (getCartItems[index].quantity === 1) {
            getCartItems.splice(index , 1)
        }else{
            getCartItems[index].quantity -= 1
        }
    }
    console.log(getCartItems);
    localStorage.setItem('cartItem' , JSON.stringify(getCartItems))
    renderCheckoutItems()
    
}