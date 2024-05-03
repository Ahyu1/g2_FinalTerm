let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: '6pcs Fried Chicken',
        image: 'item1.png',
        price: 345.00
    },
    {
        id: 2,
        name: '12sticks Pork BBQ',
        image: 'item2.png',
        price: 340.00
    },
    {
        id: 3,
        name: 'Pancit Malabon Platter',
        image: 'item3.png',
        price: 390.00
    },
    {
        id: 4,
        name: 'BBQ w/rice & Pancit Malabon',
        image: 'item4.png',
        price: 155.00
    },
    {
        id: 5,
        name: '2pc Fried Chicken w/rice',
        image: 'item5.png',
        price: 155.00
    },
    {
        id: 6,
        name: 'Chicken w/rice & Pancit',
        image: 'item6.png',
        price: 165.00
    },
    {
        id: 7,
        name: 'Halo-Halo Leche Plan',
        image: 'plan.jpg',
        price: 130.00
    },
    {
        id: 8,
        name: 'Halo-Halo Classic',
        image: 'classic.jpg',
        price: 120.00
    },
    {
        id: 9,
        name: 'Halo-Halo Ube Royale',
        image: 'ube.jpg',
        price: 130.00
    }
];


let listCards  = [];

function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

