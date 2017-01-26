// PRODUCTS ARRAY OF OBJECTS

var products = [];

products.item01 = {
	name: "Item 01",
	price: "64.21",
	description: "Size 9 shoe."
};

products.item02 = {
	name: "Item 02",
	price: "43.12",
	description: "32 foot fishing boat."
};

products.item03 = {
	name: "Item 03",
	price: "18.32",
	description: "DC Comics Book."
};

products.item04 = {
	name: "Item 04",
	price: "32.54",
	description: "Gasoline front throw lawnmower"
};

products.item05 = {
	name: "Item 04",
	price: "32.54",
	description: "Gasoline front throw lawnmower"
};

products.item06 = {
	name: "Item 04",
	price: "32.54",
	description: "Gasoline front throw lawnmower"
};

products.item07 = {
	name: "Item 04",
	price: "32.54",
	description: "Gasoline front throw lawnmower"
};

// MAIN PRODUCT BUILD FUNCTION

function buildMainProduct(name, price, description) {
	var output = [ 
	'<section class="item">',
	'<header>',
	'<img src="http://placehold.it/180x100" alt="">',
	'<h1>' + name + '</h1>',
	'</header>',
	'<p>' + description + '</p>',
	'<div class="footer">',
	'<div class="itemTotal">',
	'<p>' + price + '</p>',
	'</div>',
	'<div class="itemButtons">',
	'<i class="material-icons red">remove</i>',
	'<i class="material-icons green">add</i>',
	'</div>',
	'<div class="itemCart">',
	'<i class="material-icons orange">add_shopping_cart</i>',
	'<input type="number" name="" maxlength="2" value="0">',
	'</div>',
	'</div>',
	'</section>'
	].join('');
	return output;
}

function checkCartInformation() {
	var currentCount = shoppingCart.querySelectorAll(".scItem").length;
	if(currentCount === 0 && !mainCart.classList.contains("active")) {
		mainCart.classList.remove("inactive");
		mainCart.classList.add("active");
	} else if(currentCount === 0 && mainCart.classList.contains("active")) {
		mainCart.classList.remove("active");
		mainCart.classList.add("inactive");
	}

}

function createShoppingCartItem(){
	var price = this.parentElement.querySelector(".itemTotal p").innerHTML;
	var quantity = this.querySelector("input[type=number]").value;
	if(quantity == 0) { return;}
	var name = this.parentElement.parentElement.querySelector("header h1").innerHTML;
	checkCartInformation();
	var shoppingCartItems = shoppingCart.querySelectorAll(".scItem");
	var currentCount = shoppingCartItems.length;
	var shoppingCartContentH1 = shoppingCart.querySelectorAll(".scItem H1");
	this.querySelector("input[type=number]").value = "0";
	for(var d = 0; d < currentCount; d++) {
		if(shoppingCartContentH1[d].innerHTML === name) {
			updateQuantityAndTotal(shoppingCartItems, price, quantity, d);
			return;
		}
	}

	shoppingCart.innerHTML += addToShoppingCartHTML(name, price, quantity);
	updateCartTotal();
	var deleteIcons = shoppingCart.querySelectorAll(".scItem i.red");
	var deleteIconsAmount = deleteIcons.length;
	for(var f = 0; f < deleteIconsAmount; f++) {
		deleteIcons[f].addEventListener("click",deleteShoppingCartItem);
	}

	var shoppingCartInputs = document.querySelectorAll(".scItem input.qty");
	var shoppingCartInputAmount = shoppingCartInputs.length;

	for(var g = 0; g < shoppingCartInputAmount; g++) {
		shoppingCartInputs[g].addEventListener("change", function(){
			if(this.value < 1) {
				this.parentElement.remove();
				updateCartTotal();
				checkCartInformation();
			} else if (this.value > 99) {
				this.value = 99;
			}
			var calculatedTotal = Number(this.value)*Number(price);
			this.parentElement.querySelector(".total").innerHTML= calculatedTotal.toFixed(2);
			updateCartTotal();
		})
	}
};

function deleteShoppingCartItem(){
		this.parentElement.parentElement.remove();
		updateCartTotal();
		checkCartInformation();
}

function updateQuantityAndTotal(items, price, quantity, i) {
	var currentQuantity = items[i].querySelector("input.qty");
	var currentTotal = items[i].querySelector(".total");
	var updatedQuantity = Number(currentQuantity.value) + Number(quantity);
	currentQuantity.value = updatedQuantity;
	var updatedTotal = updatedQuantity * price;
	currentTotal.innerHTML = updatedTotal.toFixed(2);
	updateCartTotal();
}

function updateCartTotal(special, amountOff) {
	cartTotals = document.querySelectorAll(".total");
	var amount = cartTotals.length;
	var total = "";
	for(var c=0; c < amount; c++) {
		total = Number(total) + Number(cartTotals[c].innerHTML);
	}
	if(special && amountOff) {
		total = (total * amountOff);
	}
	var shoppingCartTotal = document.querySelector("em.grandTotal");
	if(amount !== 0) {
	shoppingCartTotal.innerHTML = total.toFixed(2);
}
}

// ADD PRODUCT TO SHOPPING CART

function addToShoppingCartHTML(name, price, quantity) {
	// if exisitng amount of product wuantity is 0 and class list to the cart 
	// has inactive remove inactive and add active to classList



	// if the product you are adding is currently in the cart, 
	// add the two quantitys together



	// if quantity 
	var total = price * quantity;
	var output = [ 
	'<section class="scItem">',
	'<header>',
	'<h1>' + name + '</h1>',
	'</header>',
	'Qty :<input class="qty shoppingCartQuantity" type="number" value="'+quantity+'""></input>',
	// '<p class="qty">QTY: ' + quantity + '</p>',
	'<div class="right">',
	// '<p class="discount">1.78</p>',
	// '<p class="total scratched">' + total + '</p>',
	'<p class="total">' + total.toFixed(2) + '</p>',
	'<i class="material-icons red">clear</i>',
	'</div>',
	'</section>'
	].join('');
	return output;
}

function minusOneFromQuantity(){
	var input = this.parentElement.parentElement.querySelector("input[type=number]");
	if(this.parentElement.parentElement.querySelector("input[type=number]").value > 0) { 
		input.value--;
	}
};

function addOneToQuantity(){
	var input = this.parentElement.parentElement.querySelector("input[type=number]");
	if(this.parentElement.parentElement.querySelector("input[type=number]").value < 99) { 
		input.value++;
	}
}


// CREATE PRODUCTS ON PAGE

// DECLARE MAIN SECTION AND OBJECT PAIRS


var artmain = document.querySelector("article.products");
var productObjPairs = utilities.pairs(products);
var productObjPairsLength = productObjPairs.length;

// LOOP THROUGH MAIN DATA OBJECT AND PREPARE DATA FOR MAIN PAGE

for(var a = 1; a < productObjPairsLength; a += 2) {
	var currentName = productObjPairs[a].name;
	var currentPrice = productObjPairs[a].price;
	var currentDescription = productObjPairs[a].description;
	artmain.innerHTML += buildMainProduct(currentName, currentPrice, currentDescription);
}

// CREATE PRODUCTS AREA

// DECLARE MAIN CART AREA, SHOPPING CART, BUTTONS ON PRODUCT AREA

var mainCart = document.querySelector(".shoppingCart");
var shoppingCart = document.querySelector("article.itemReview");
var tempCartButton = document.querySelectorAll(".itemCart");
var tempCartValue = document.querySelectorAll(".itemCart>input");
var amountOfTempCartButton = tempCartButton.length;

// 

for(var b = 0; b < amountOfTempCartButton; b++) {
	tempCartButton[b].addEventListener("click",createShoppingCartItem);
}

// CREATE CLICK FUNCTIONALITY FOR TEMPORARY CART

var addOneQuantity = document.querySelectorAll("i.green");
var minusOneQuantity = document.querySelectorAll("i.red");
var addCount = addOneQuantity.length;
var minusCount = minusOneQuantity.length;

for( var i = 0; i < addCount; i++) {
	addOneQuantity[i].addEventListener("click", addOneToQuantity );
}

for(var i = 0; i < minusCount; i++) {
	minusOneQuantity[i].addEventListener("click", minusOneFromQuantity );
}


var promotionInput = document.querySelector(".coupons input");
promotionInput.addEventListener("change", function(){
	switch(this.value){
		case "bigSmokingDeal2017":
			updateCartTotal(true, .5);
			
			break
		case "jessica":
			
			break
	}
})

var cartButton = document.querySelector(".cartButton");
cartButton.addEventListener("click", function(){
	if(mainCart.classList.contains("active") && !mainCart.classList.contains("hide")) {
		mainCart.classList.add("hide");
	} else if (mainCart.classList.contains("active") && mainCart.classList.contains("hide")) {
		mainCart.classList.remove("hide");
	} 
})











