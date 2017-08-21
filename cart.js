//Array of items available
const ITEMS = [
    {
        "name": "Item 1",
        "price": 10.99,
        "image": "http://lorempixel.com/250/250/"
    },
    {
        "name": "Item 2",
        "price": 12,
        "image": "http://lorempixel.com/250/250/"
    },
    {
        "name": "Item 3",
        "price": 7.99,
        "image": "http://lorempixel.com/250/250/"
    },
    {
        "name": "Item 4",
        "price": 15.49,
        "image": "http://lorempixel.com/250/250/"
    },
    {
        "name": "Item 5",
        "price": 1,
        "image": "http://lorempixel.com/250/250/"
    }
];

const shoppingCart = {

    cart: [],
    render: function(){

        //If no items in the cart hide the form

        let subtotal = 0;

        $(".cart").empty();

        if (this.cart.length == 0) {

            $("#shippingForm").hide();
            return;
        }

        //The loop will add the items to the shopping cart

        for(let i = 0; i< this.cart.length; i++){

            let itemDiv = $('<div class="col col-xs-12 col-md-12 col-lg-12"></div>');
            let name = $('<span class="col col-xs-12 col-md-6 col-lg-6">' + this.cart[i].name + '</span>');
            let price = $('<span class="col col-xs-12 col-md-6 col-lg-6">' + this.cart[i].price.toFixed(2) + '</span>');

            itemDiv.append(name);
            itemDiv.append(price);
            $(".cart").append(itemDiv);

            subtotal += this.cart[i].price;
        }

        //the following code will add the bottoms and calculate the tax

        let taxes = subtotal * 10/100;
        let total = subtotal + taxes;
        totalDiv = $('<div class="card col col-xs-12 col-md-12 col-lg-12"><hr/></div>');

        //subtotal
        totalDiv.append($('<span class="col col-xs-12 col-md-6 col-lg-6">Subtotal: </span>'));
        totalDiv.append($('<span class="col col-xs-12 col-md-6 col-lg-6">' + subtotal.toFixed(2) + '</span>'));

        //taxes
        totalDiv.append($('<span class="col col-xs-12 col-md-6 col-lg-6">Taxes: </span>'));
        totalDiv.append($('<span class="col col-xs-12 col-md-6 col-lg-6">' + taxes.toFixed(2) + '</span>'));

        //total
        totalDiv.append($('<span class="col col-xs-12 col-md-6 col-lg-6">Total: </span>'));
        totalDiv.append($('<span class="col col-xs-12 col-md-6 col-lg-6">' + total.toFixed(2) + '</span>'));

        $(".cart").append(totalDiv);

        $("#shippingForm").show();

    },
    addItem: function(item){
        this.cart.push(item);
        this.render();
    }
};

const shoppingList = {
    render: function(){

        $("#product-list").empty();

        for (let i=0; i<ITEMS.length; i++){

            let product = $('<div class="col col-xs-12 col-md-6 col-lg-4"></div>');
            let image = $('<div><img src="' + ITEMS[i].image + '"></div>');
            let title = $('<h2>' +  ITEMS[i].name + '</h2>');
            let price = $('<p>$' + ITEMS[i].price + '</p>');

            product.append(image);
            product.append(title);
            product.append(price);

            button = $('<input type="button" value="Add to cart"/>');

            button.on("click", function() {
                shoppingCart.addItem(ITEMS[i]);
            });

            product.append(button);

            $("#product-list").append(product);
        }
    }
};

//Ready to submit the form

$( document ).ready(function() {

    shoppingList.render();
    shoppingCart.render();
    $("#shippingForm").on("submit", function(event){

        event.preventDefault();
        alert("Thanks for buying!");

    });
});
