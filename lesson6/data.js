let products = [
    {
        name: 'Pho',
        title: 'Description',
        img: 'https://cdn.tgdd.vn/2020/11/CookRecipe/GalleryStep/hoan-thanh-97.jpg'
    },
    {
        name: 'Banh_cuon',
        title: 'Description',
        img: 'https://toplist.vn/images/800px/banh-cuon-nong-dau-ngo-54-trieu-khuc-234579.jpg'
    },
    {
        name: 'Bun_cha',
        title: 'Description',
        img: 'https://dulichvietnam.com.vn/vnt_upload/File/Image/bun_cha_ha_noi_o_tphcm_1.jpg'
    },
    {
        name: 'Banh_da_cua',
        title: 'Description',
        img: 'https://www.diadiemanuong.net.vn/upload/images/users/2019321072129_banhdacua.jpg'
    },
    {
        name: 'Mien_xao',
        title: 'Description',
        img: 'https://media.cooky.vn/recipe/g4/34807/s320x320/cooky-recipe-cover-r34807.jpg'
    },
    {
        name: 'Banh_mi',
        title: 'Description',
        img: 'http://vinanet.vn/Uploaded/ThuHai/2020_03_02/b3_NGFB.png'
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
                <img scr = ${products.img} alt = '' class = 'img-icon'>
                <button class = 'btn type = 'input' value =  ${products.name}>add to list</button>
            </div>
            <div class = 'content'>
                <h3> ${products.name}</h3>
                <p> ${products.title}</p>
            </div>
        </div>
    `
};
