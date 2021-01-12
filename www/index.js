import {products} from './products.js';
import {aboutText} from './aboutText.js'

let newProd = products;
const renderProducts = ()=> {
    let allProducts = document.getElementById('index-template').innerHTML;
    let template = Handlebars.compile(allProducts);
    let rendered = template({products: newProd});
    document.getElementById('products').innerHTML += rendered;

}
if(document.getElementById('index-template') !== null){
    renderProducts();
} 


window.renderProduct = (val) => {
    let productDetail = JSON.parse(val);
    let thisProduct = document.getElementById("product-template").innerHTML;
    let template = Handlebars.compile(thisProduct);
    let rendered = template({product: productDetail});
    document.getElementById('products').innerHTML = rendered;

}




window.updateAmount = (value) => {
    let AmountOfitems = document.getElementById('items');
    let btnRemove = document.getElementsByClassName('btn-remove');
    let num = parseInt(AmountOfitems.innerHTML);
    if(num === 0){
        console.log('hej');
        btnRemove.disabled = true;
        value == 'inc' ? num++ : null
        AmountOfitems.innerHTML = num

    }else{
        console.log('lpgkj');
        value == "inc" ? num++ : num--;
        AmountOfitems.innerHTML = num
    }
  
    
}

window.about = () => {
    // console.log(aboutText);
    // let aboutInfo = aboutText;
    // console.log(aboutInfo);
    let about = document.getElementById('about-template').innerHTML;
    let template = Handlebars.compile(about);
    let rendered = template({mainText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, nemo! In consequuntur vitae, earum dolore quas provident autem vel quibusdam fugit nostrum dolorum eum itaque recusandae numquam dignissimos nisi minus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda distinctio esse veritatis totam sequi sapiente, sunt quis nihil rerum eaque commodi tenetur nam quaerat alias quidem, vero, voluptates earum sit? Sint reprehenderit necessitatibus vel facere temporibus maxime expedita harum voluptatum molestiae? Recusandae accusantium aut minima odio. Cumque at aliquam illum voluptatum reprehenderit, quasi nisi? Odio, assumenda nulla? Hic, expedita vitae!         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, nemo! In consequuntur vitae, earum dolore quas provident autem vel quibusdam fugit nostrum dolorum eum itaque recusandae numquam dignissimos nisi minus.',
    paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi optio incidunt corrupti fugit itaque doloribus dolorem at laudantium repellendus, beatae assumenda temporibus pariatur deleniti! Maiores, soluta! Doloribus velit suscipit corporis!    '
});
    document.getElementById('products').innerHTML = rendered;
}

