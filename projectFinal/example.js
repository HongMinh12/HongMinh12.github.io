//showPro
let mainProd = document.getElementById('main-content');
//fnc list
function showList(productsData){

    for(let prod of productsData){
        let imageUrl = prod.imageUrl;
        let name = prod.name;
        // console.log(name)
        let brand = prod.brand;
        let price = prod.price;
        let size = prod.size;
        let sex = prod.sex;
        let scent = prod.scent;
        // let more = prod['link'][0].attributes.href;
        product(imageUrl,name, brand,price,size,sex,scent);
    }
}
// console.log(showList);
showList(productsData);
// fnc prod
function product(imageUrl,name, brand,price,size,sex,scent){

    // console.log(mainProd)
    mainProd.insertAdjacentHTML('beforeend',`
    <div class="main-item">
        <div class="main-pic">
            <img wirdth="170" height="170" src="${imageUrl}" alt="${name}"/>
        </div>
        <div class="title">
            <b>${brand}</b><br/>
            <span>${price}</span>
          <button>buy</button>
        </div>
    </div>
`);
}