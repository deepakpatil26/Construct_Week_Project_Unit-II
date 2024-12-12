// TOTAL AMOUNT & DISCOUNT
let total = 0;
let disc = 0;

// COUPAN APPLY
const coupans = document.querySelector("#coupans").innerText;

// Load Cart from Local Storage
let loadcart = JSON.parse(localStorage.getItem("cart-page")) || [];
let quantity = 0;
let sum = 0;

/* ==================== APPLY COUPON ======================= */
document.querySelector("#promobtn").addEventListener("click", applyCoupon);

function applyCoupon() {
  if (coupans === "masai30") {
    const discountAmount = total * 0.5; // 50% discount
    disc = total - discountAmount;
    alert("Congrats! You got a 50% discount.");
    total = disc;
    updateTotalPrice();
  } else {
    alert("Invalid Coupon.");
  }
}

/* ==================== RENDER CART ITEMS ======================= */
function renderCart() {
  const cartItemContainer = document.querySelector("#cartitem");
  cartItemContainer.innerHTML = ""; // Clear existing cart items
  const fragment = document.createDocumentFragment();

  loadcart.forEach((el, index) => {
    quantity += el.counter;
    sum += Number(el.price) * el.counter;

    const div = document.createElement("div");
    const div2 = document.createElement("div");
    div2.setAttribute("class", "card");

    const imga = document.createElement("img");
    imga.setAttribute("src", el.image_url);

    const nam = document.createElement("h3");
    nam.innerText = el.name;

    const price = document.createElement("p");
    price.innerText = `Price: $${el.price}`;

    const Quantity = document.createElement("p");
    Quantity.innerText = `Quantity: ${el.counter}`;

    const remove = document.createElement("button");
    remove.innerText = "Remove";
    remove.classList.add("btn-remove");
    remove.addEventListener("click", () => deleteItem(index));

    div2.append(nam, price, Quantity, remove);
    div.append(imga, div2);

    fragment.appendChild(div);
  });

  cartItemContainer.appendChild(fragment);
  document.querySelector("#quantity").innerText = quantity;
  total = sum;
  updateTotalPrice();
}

/* ==================== UPDATE TOTAL PRICE ======================= */
function updateTotalPrice() {
  document.querySelector("#totalprice").innerText = `$${total}`;
}

/* ==================== SAVE CART TO LOCAL STORAGE ======================= */
document.querySelector("#place").addEventListener("click", saveOrder);

function saveOrder() {
  localStorage.setItem("pricestore", JSON.stringify(loadcart));
  window.location.href = "payment.html";
}

/* ==================== DELETE ITEM FROM CART ======================= */
function deleteItem(index) {
  loadcart.splice(index, 1);
  localStorage.setItem("cart-page", JSON.stringify(loadcart));
  window.location.reload();
}

/* ==================== INITIALIZE CART ON PAGE LOAD ======================= */
renderCart();
