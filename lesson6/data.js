let products = [
    {
        name: 'Pho',
        title: 'Description',
        img: ''
    },
    {
        name: 'BanhCuon',
        title: 'Description',
        img: ''
    },
    {
        name: 'BunCha',
        title: 'Description',
        img: ''
    },
    {
        name: 'BanhDaCua',
        title: 'Description',
        img: ''
    },
    {
        name: 'MienXao',
        title: 'Description',
        img: ''
    },
    {
        name: 'BanhMi',
        title: 'Description',
        img: ''
    }   
];

//localStorage
let productsCart = []
let productsCartString = JSON.stringify(productsCart);
localStorage.setItem('productsCart', productsCartString);

let productsString = JSON.stringify(products);
console.log(JSON.parse(productsData));
localStorage.setItem('products', productsString);

let productsData = localStorage.getItem('products');
// console.log(JSON.parse(productsData));


let items = document.querySelector('.items')
for (product of products) {
    items.innerHTML += `
        <div class= 'item'>
        <div class= 'product-view'>
            <img scr = ${product.img} alt = '' class = 'img-icon'>
            <button class = 'btn type = 'input' value =  ${product.name}>add to list</button>
        </div>
        <div class = 'content'>
            <h3> ${product.name}</h3>
            <p> ${product.title}</p>
        </div>
        </div>
    `
}
