


const foods = [
    {
        name: "Classic Beef Burger",
        category: "Burgers",
        description: "Juicy beef patty with fresh lettuce, tomato and cheese.",
        price: 65,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700"
    },
    {
        name: "Zesty Chicken Burger",
        category: "Burgers",
        description: "Crispy chicken with fresh vegetables and special sauce.",
        price: 60,
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=700"
    },
    {
        name: "Double Cheese Burger",
        category: "Burgers",
        description: "Two juicy beef patties with melted cheddar cheese.",
        price: 85,
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=700"
    },
    {
        name: "Grilled Chicken Wrap",
        category: "Burgers",
        description: "Grilled chicken wrapped with fresh vegetables.",
        price: 55,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=700"
    },
    {
        name: "Margherita Pizza",
        category: "Pizza",
        description: "Classic pizza with tomato, mozzarella and basil.",
        price: 90,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700"
    },
    {
        name: "BBQ Chicken Pizza",
        category: "Pizza",
        description: "Chicken pizza with smoky barbecue sauce.",
        price: 110,
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=700"
    },
    {
        name: "Pepperoni Pizza",
        category: "Pizza",
        description: "Topped with pepperoni and melted cheese.",
        price: 115,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=700"
    },
    {
        name: "Loaded Fries",
        category: "Fast Food",
        description: "Golden crispy fries loaded with melted cheese, delicious sauce and tasty toppings.",
        price: 45,
        image: "https://myhomemaderecipe.com/assets/images/Loaded-Cheese-Fries-with-Beef--Cheddar--and-Toppings-hero.jpg?w=1024"
    },
    {
        name: "Chicken Wings (6 pcs)",
        category: "Sides",
        description: "Six deliciously seasoned chicken wings.",
        price: 65,
        image: "https://images.unsplash.com/photo-1766589221215-b182d7a4df0b?auto=format&fit=crop&fm=jpg&q=85&w=700"
    },
    {
        name: "Regular French Fries",
        category: "Sides",
        description: "Golden and crispy French fries.",
        price: 30,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700"
    },
    {
        name: "Jollof Rice & Chicken",
        category: "Local Dishes",
        description: "Delicious Ghana-style spicy jollof rice served with juicy grilled chicken.",
        price: 65,
        image: "https://masadarestaurants.com/assets/images/menu-3.jpg"
    },
    {
        name: "Waakye Special",
        category: "Local Dishes",
        description: "Traditional Ghanaian waakye served with tasty sides and delicious accompaniments.",
        price: 55,
        image: "https://www.atravel.blog/content/images/recipes/waakye.webp"
    },
    {
        name: "Fried Rice & Chicken",
        category: "Local Dishes",
        description: "Seasoned fried rice served with chicken.",
        price: 75,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=700"
    },
    {
        name: "Banku & Grilled Tilapia",
        category: "Local Dishes",
        description: "Fresh grilled tilapia served with soft banku, pepper and sliced onions.",
        price: 115,
        image: "https://deeskitchengh.com/hero-images/grilled-fish-banku.jpg"
    },
    {
        name: "Fresh Orange Juice",
        category: "Drinks",
        description: "Freshly squeezed oranges served chilled.",
        price: 30,
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=700"
    },
    {
        name: "Pineapple Ginger Juice",
        category: "Drinks",
        description: "Fresh pineapple juice blended with natural ginger.",
        price: 25,
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=700"
    },
    {
        name: "Mango Smoothie",
        category: "Drinks",
        description: "A refreshing creamy smoothie blended with fresh ripe mangoes.",
        price: 35,
        image: "https://www.scrumptiously.com/wp-content/uploads/2023/10/MangoSmoothie.webp"
    },
    {
        name: "Strawberry Smoothie",
        category: "Drinks",
        description: "A refreshing, creamy strawberry smoothie made with sweet strawberries.",
        price: 40,
        image: "https://www.wisdomlib.org/uploads/recipes/strawberry-smoothie-41684.jpg"
    },
    {
        name: "Bottled Water",
        category: "Drinks",
        description: "Cold bottled drinking water.",
        price: 10,
        image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=700"
    },
    {
        name: "Soft Drink",
        category: "Drinks",
        description: "Refreshing chilled soft drink.",
        price: 15,
        image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=700"
    }
];


const foodGrid = document.getElementById("food-grid");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");

let cart = [];


// DISPLAY FOOD

function displayFoods(items) {
    if (!foodGrid) return;

    foodGrid.innerHTML = "";

    items.forEach(food => {
        const card = document.createElement("div");
        card.className = "food-card";

        card.innerHTML = `
            <img src="${food.image}"
                 alt="${food.name}"
                 loading="lazy"
                 onerror="this.onerror=null;this.src='https://placehold.co/600x400?text=KENT+BITE';">

            <div class="food-info">
                <h3>${food.name}</h3>
                <p>${food.description}</p>

                <div class="food-bottom">
                    <strong>GH₵${food.price.toFixed(2)}</strong>
                    <button class="add-cart-btn" data-name="${food.name}">
                        Add to Cart +
                    </button>
                </div>
            </div>
        `;

        foodGrid.appendChild(card);
    });
}


// SHOW ALL FOOD AT START

displayFoods(foods);


// CATEGORY FILTER

const categoryButtons = document.querySelectorAll(".category-card");

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;

        categoryButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        if (category === "All") {
            displayFoods(foods);
        } else {
            displayFoods(foods.filter(food => food.category === category));
        }
    });
});


// ADD TO CART


let cartToastTimer;

if (foodGrid) {
    foodGrid.addEventListener("click", (event) => {
        const button = event.target.closest(".add-cart-btn");
        if (!button) return;

        const name = button.dataset.name;
        const food = foods.find(item => item.name === name);
        if (!food) return;

        const existing = cart.find(item => item.name === name);

        if (existing) {
            existing.quantity++;
        } else {
            cart.push({...food, quantity: 1});
        }

        // Update the shopping cart
        updateCart();

        // Animate the Add to Cart button
        const originalText = button.textContent.trim();

        button.classList.remove("added", "bounce");
        void button.offsetWidth;

        button.textContent = "Added to Cart";
        button.classList.add("added", "bounce");

        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove("added", "bounce");
        }, 1200);

        // Show a notification
        let cartToast = document.querySelector(".cart-toast");

        if (!cartToast) {
            cartToast = document.createElement("div");
            cartToast.className = "cart-toast";
            document.body.appendChild(cartToast);
        }

        cartToast.textContent = food.name + " added to your cart!";
        cartToast.classList.add("show");

        clearTimeout(cartToastTimer);

        cartToastTimer = setTimeout(() => {
            cartToast.classList.remove("show");
        }, 2000);
    });
}

// UPDATE CART

function updateCart() {
    if (!cartItems || !cartTotal) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is currently empty.</p>';
    } else {
        cartItems.innerHTML = "";

        cart.forEach(item => {
            const row = document.createElement("div");
            row.className = "cart-item";

            row.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>GH₵${item.price.toFixed(2)}</p>
                </div>

                <div class="cart-controls">
                    <button data-action="decrease" data-name="${item.name}">−</button>
                    <span>${item.quantity}</span>
                    <button data-action="increase" data-name="${item.name}">+</button>
                    <button class="remove-btn" data-action="remove" data-name="${item.name}">Remove</button>
                </div>
            `;

            cartItems.appendChild(row);
        });
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = `GH₵${total.toFixed(2)}`;
}


// CART BUTTONS

if (cartItems) {
    cartItems.addEventListener("click", event => {
        const button = event.target.closest("button[data-action]");
        if (!button) return;

        const name = button.dataset.name;
        const action = button.dataset.action;
        const item = cart.find(food => food.name === name);

        if (!item) return;

        if (action === "increase") item.quantity++;

        if (action === "decrease") {
            item.quantity--;
            if (item.quantity <= 0) {
                cart = cart.filter(food => food.name !== name);
            }
        }

        if (action === "remove") {
            cart = cart.filter(food => food.name !== name);
        }

        updateCart();
    });
}


// CHECKOUT - WHATSAPP ORDERING
if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {

        if (cart.length === 0) {
            alert("Your cart is empty. Please add some food first.");
            return;
        }

        let message = "Hello KENT BITE! I would like to place an order.\n\n";

        cart.forEach(item => {
            message += `${item.name} x ${item.quantity} = GH₵${(item.price * item.quantity).toFixed(2)}\n`;
        });

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

        message += `\nTotal: GH₵${total.toFixed(2)}`;
        message += "\n\nPlease confirm my order. Thank you!";

        const phoneNumber = "233545069542";
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");
    });
}


// START EMPTY CART

updateCart();

console.log("KENT BITE website loaded successfully!");
// KENT BITE CONTACT FORM
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("customer-name").value.trim();
        const email = document.getElementById("customer-email").value.trim();
        const phone = document.getElementById("customer-phone").value.trim();
        const message = document.getElementById("customer-message").value.trim();
        const feedback = document.getElementById("form-feedback");

        if (!name || !email || !phone || !message) {
            feedback.textContent = "Please fill in all fields.";
            feedback.style.color = "red";
            return;
        }

        feedback.textContent = "Thank you, " + name + "! Your message has been received.";
        feedback.style.color = "green";

        contactForm.reset();
    });
}

// KENT BITE - SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".section-heading, .food-card, .about-section, .why-us-section, .offer-section, .contact-card, .review-card"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// KENT BITE - LOADING SCREEN

window.addEventListener("load", () => {
    const loader = document.getElementById("page-loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");

            setTimeout(() => {
                loader.remove();
            }, 600);

        }, 1000);
    }
});

// KENT BITE - BACK TO TOP FUNCTION

const backToTopButton = document.getElementById("back-to-top");

if (backToTopButton) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
