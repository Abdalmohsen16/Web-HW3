let object = {
    indomie: {
        name: 'Indomie x10',
        price: 2,
        image: './images/indomie.png'
    },

    juice: {
        name: 'Cocktail juice x3',
        price: 1,
        image: './images/Juice.png'
    },

    nuggets: {
        name: 'Chicken nuggets',
        price: 1.5,
        image: './images/Nuggets.png'
    }
}


let prices = [

    {
        name : 'Indomie',
        price : 2,
    },

    {
        name : 'Nuggets',
        price : 1.5,
    },

    {
        name: 'Juice',
        price : 1
    }
]



let total = 0;

function cart(key) {

    document.getElementById("cart-list").style.display = "flex";

    let product_name = object[key]["name"];

    let product_price = object[key]["price"];
    
    let product_image = object[key]["image"];

    document.getElementById("cart-list").innerHTML += 
    `<div id="cart" class="product">
        <img src="${product_image}" alt="product image" id="productimg" width="100px">
        <h2 id="productname">${product_name}</h2>
        <h2 id="productprice">${product_price} K.D</h2>
        <div class="closebutton" id="close" onclick="closeproduct(), Minus()">
        <h3 style="font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; color: white; font-size: 32px">X</h3>
    </div>`;


    total = total + product_price

    document.getElementById("total").innerHTML = `<h1>Total price is ${total}</h1>`

}

function closeproduct() {
    document.getElementById("cart").remove();
}


let count = 0;


function calculate() {

   count ++ 

   console.log(count)

    document.getElementById("number").innerHTML = `<h1>${count}</h1>`;

}


function Minus() {

    count -- 

    document.getElementById("number").innerHTML = `<h1>${count}</h1>`; 
}




