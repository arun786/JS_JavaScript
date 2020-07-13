const products = [{ name: 'computer' }]
const product = products[0]

//Truthy value which resolves to true
//Falsy - value the resolves to false
//Falsy - false, 0, empty string, null , undefined, NaN


//1. This will give true value, though the product is string
if (product) {
    console.log("Product found")
} else {
    console.log("Product not found")
}

console.log('-------false--------')
if (false) {
    console.log('this block will not be printed')
} else {
    console.log('else block will be printed')
}
console.log('-------0--------')
if (0) {
    console.log('this block will not be printed')
} else {
    console.log('else block will be printed')
}

console.log('--------Empty String-------')
if ('') {
    console.log('this block will not be printed')
} else {
    console.log('else block will be printed')
}

console.log('--------null-------')
if (null) {
    console.log('this block will not be printed')
} else {
    console.log('else block will be printed')
}

console.log('--------undefined-------')
if (null) {
    console.log('this block will not be printed')
} else {
    console.log('else block will be printed')
}

console.log('--------NaN-------')
if (NaN) {
    console.log('this block will not be printed')
} else {
    console.log('else block will be printed')
}
