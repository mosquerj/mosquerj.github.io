class Pizza {
    constructor(name, image, ingredients, sauce, cheese, price) {
        this.name = name;
        this.image = `images/${image}`;
        this.ingredients = ingredients;
        this.sauce = sauce;
        this.cheese = cheese;
        this.price = price;
    }

    getPizzaHTML() {
        return `
            <div class="pizza-item" onclick="showModal('${this.name}')">
                <img src="${this.image}" alt="${this.name}">
                <h3>${this.name}</h3>
            </div>
        `;
    }

    getPizzaDetails() {
        return {
            name: this.name,
            image: this.image,
            ingredients: this.ingredients.join(', '),
            sauce: this.sauce,
            cheese: this.cheese,
            price: this.price
        };
    }
}

const pizzas = [
    new Pizza("Hawaiian", "hawaiian.jpg", ["Ham", "Pineapple"], "Tomato", "Mozzarella", 15.5),
    new Pizza("Buffalo Chicken Ranch", "bcr.jpg", ["Chicken", "Ranch Sauce"], "Buffalo Sauce", "Cheddar", 18.2),
    new Pizza("Margherita", "margherita.jpg", ["Basil", "Tomatoes"], "Extra Virgin Olive Oil", "Fresh Mozzarella", 19.2),
    new Pizza("Pepperoni", "pepperoni.jpg", ["Pepperoni"], "Tomato", "Mozzarella", 17.0),
    new Pizza("Veggie", "veggie.jpg", ["Mushrooms", "Olives", "Peppers"], "Tomato", "Mozzarella", 16.5)
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("pizza-container");
    pizzas.forEach(pizza => container.innerHTML += pizza.getPizzaHTML());
});

function showModal(pizzaName) {
    const pizza = pizzas.find(p => p.name === pizzaName);
    if (pizza) {
        const details = pizza.getPizzaDetails();
        document.getElementById("modal-title").innerText = details.name;
        document.getElementById("modal-image").src = details.image;
        document.getElementById("modal-ingredients").innerText = details.ingredients;
        document.getElementById("modal-sauce").innerText = details.sauce;
        document.getElementById("modal-cheese").innerText = details.cheese;
        document.getElementById("modal-price").innerText = details.price.toFixed(2);

        document.getElementById("pizzaModal").style.display = "block";
    }
}

function closeModal() {
    document.getElementById("pizzaModal").style.display = "none";
}
