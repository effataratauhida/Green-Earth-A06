let cart = [];

const addToCart = (id, name, price) => {

const itemsInCart = cart.find(item => item.id === id);

  if (itemsInCart) {
    itemsInCart.quantity += 1;
  } 
  else {
    cart.push ({id, name, price , quantity: 1});
  }

  displayCart();
  showAlert(name);
};

// alert message 

const showAlert = (name) => {
    alert(`${name} has been added to the cart.`)
}

function removeItem (id) {
    cart = cart.filter(item => item.id !== id);

    displayCart();
}

// Show cart
const displayCart = () => {
    const cartContainer = document.getElementById("cart-container"); 
    cartContainer.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        const div = document.createElement("div");
        div.classList.add("flex", "justify-between", "items-center", "mx-2", "my-4", "py-2", "px-2" , "bg-[#f0fdf4]" , "rounded-lg");
        div.innerHTML = `
            <div>
                <p class="font-semibold">${item.name}</p>
                <p class="text-sm text-gray-600">৳${item.price} x ${item.quantity}</p>
            </div>
            
        `;

    // cross button
    const crossBtn = document.createElement('button');
    crossBtn.textContent = "❌";
    crossBtn.classList.add("font-medium" , "text-red-600");

    crossBtn.addEventListener('click', () => {
        removeItem(item.id);
    })

        div.appendChild(crossBtn);
        cartContainer.appendChild(div);
    });

    // মোট দাম
    const totalDiv = document.createElement("div");
    totalDiv.classList.add("flex", "justify-between", "items-center", "px-2", "py-2", "mt-2", "font-bold");
    totalDiv.innerHTML = `
        
        <p>Total:</p>
        <p>৳${total}</p>
    `;
    cartContainer.appendChild(totalDiv);
};
