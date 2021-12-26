let item = document.querySelector('.item');
let cart = document.querySelector('.container-right');
let cartParse = JSON.parse(localStorage.getItem('productsCart'));

console.log('cartParse', cartParse);
item.addEventListener('click', function(event){
    alert(event.target.value);
    let item = event.target.value;
    console.log('item:', item);
    cartParse.push(`${item}`)
    localStorage.setItem('productCart', JSON.stringify(cartParse));
    cart.innerHTML += `<p>${item}</p>`
})