let name = "shoes";
let basePrice = 1000;
let discountPercent = 20;
let taxRate = 18;
let stockStatus = "in_stock";

// This function calculates the price after discount

function calculateDiscountedPrice(price, discount) {
    return price - (price * discount / 100);
}

// this function is calculate the tax amount

function calculateTax(price, taxRate) {
    return price * taxRate / 100;
}


// This function calculates the final price after discount and tax

function calculateFinalPrice(price, discount, taxRate) {
    let discountedPrice = calculateDiscountedPrice(price, discount);
    let tax = calculateTax(discountedPrice, taxRate);
    return discountedPrice + tax;
}

// This function checks whether shipping is free

function isFreeShipping(finalPrice) {
    if (finalPrice >= 500) {
        return "Free Shipping";
    } else {
        return "Shipping: Rs.49";
    }
}

// This function returns a message based on stock status

function getStockMessage(status) {
    if (status === "in_stock") {
        return "In Stock";
    } else if (status === "limited") {
        return "Limited Stock";
    } else {
        return "Out of Stock";
    }
}


// This function calls all functions and prints the product summary

let discountedPrice = calculateDiscountedPrice(basePrice, discountPercent);
let taxAmount = calculateTax(discountedPrice, taxRate);
let finalPrice = calculateFinalPrice(basePrice, discountPercent, taxRate);
let shipping = isFreeShipping(finalPrice);
let stockMessage = getStockMessage(stockStatus);

// Print the full price summary

console.log("----- Product Price Summary -----");
console.log("Product Name:", name);
console.log("Base Price: Rs.", basePrice);
console.log("Discount:", discountPercent + "%");
console.log("Discounted Price: Rs.", discountedPrice);
console.log("Tax Amount: Rs.", taxAmount);
console.log("Final Price: Rs.", finalPrice);
console.log("Shipping:", shipping);
console.log("Stock Status:", stockMessage);
