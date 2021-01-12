(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aboutText = void 0;
var aboutText = {
  "mainText": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eaque accusamus, fuga a sit natus! Officia amet, itaque quod nobis quas dolores optio, ad harum mollitia eligendi quos rem laborum.",
  "paragraph": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum modi odit laboriosam debitis asperiores, culpa eum sit accusamus architecto omnis neque nobis totam eos ratione doloremque repellat exercitationem adipisci ullam ea blanditiis excepturi? Incidunt officia aliquam ducimus, veniam laborum quos ipsum delectus fugit illo modi culpa laudantium, dolorum odio labore repellendus, voluptas harum saepe eum id? Vitae id cupiditate adipisci!"
};
exports.aboutText = aboutText;

},{}],2:[function(require,module,exports){
"use strict";

var _products = require("./products.js");

var _aboutText = require("./aboutText.js");

var newProd = _products.products;

var renderProducts = function renderProducts() {
  var allProducts = document.getElementById('index-template').innerHTML;
  var template = Handlebars.compile(allProducts);
  var rendered = template({
    products: newProd
  });
  document.getElementById('products').innerHTML += rendered;
};

if (document.getElementById('index-template') !== null) {
  renderProducts();
}

window.renderProduct = function (val) {
  var productDetail = JSON.parse(val);
  var thisProduct = document.getElementById("product-template").innerHTML;
  var template = Handlebars.compile(thisProduct);
  var rendered = template({
    product: productDetail
  });
  document.getElementById('products').innerHTML = rendered;
};

window.updateAmount = function (value) {
  var AmountOfitems = document.getElementById('items');
  var btnRemove = document.getElementsByClassName('btn-remove');
  var num = parseInt(AmountOfitems.innerHTML);

  if (num === 0) {
    console.log('hej');
    btnRemove.disabled = true;
    value == 'inc' ? num++ : null;
    AmountOfitems.innerHTML = num;
  } else {
    console.log('lpgkj');
    value == "inc" ? num++ : num--;
    AmountOfitems.innerHTML = num;
  }
};

window.about = function () {
  // console.log(aboutText);
  // let aboutInfo = aboutText;
  // console.log(aboutInfo);
  var about = document.getElementById('about-template').innerHTML;
  var template = Handlebars.compile(about);
  var rendered = template({
    mainText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, nemo! In consequuntur vitae, earum dolore quas provident autem vel quibusdam fugit nostrum dolorum eum itaque recusandae numquam dignissimos nisi minus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda distinctio esse veritatis totam sequi sapiente, sunt quis nihil rerum eaque commodi tenetur nam quaerat alias quidem, vero, voluptates earum sit? Sint reprehenderit necessitatibus vel facere temporibus maxime expedita harum voluptatum molestiae? Recusandae accusantium aut minima odio. Cumque at aliquam illum voluptatum reprehenderit, quasi nisi? Odio, assumenda nulla? Hic, expedita vitae!         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, nemo! In consequuntur vitae, earum dolore quas provident autem vel quibusdam fugit nostrum dolorum eum itaque recusandae numquam dignissimos nisi minus.',
    paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi optio incidunt corrupti fugit itaque doloribus dolorem at laudantium repellendus, beatae assumenda temporibus pariatur deleniti! Maiores, soluta! Doloribus velit suscipit corporis!    '
  });
  document.getElementById('products').innerHTML = rendered;
};

},{"./aboutText.js":1,"./products.js":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.products = void 0;
var products = [{
  "id": 1,
  "name": "Nike Air Max 1/97 VF Sean Wotherspoon",
  "price": 1599,
  "currency": "SEK",
  "image": "/1.jpg",
  "thumbnail": "/images/1-thumb.jpg",
  "description": "Maybe the most anticipated release of the year, yes, we have said this already about the ÔÇ£Animal Pack 2.0ÔÇØ but this might be a close photo finish."
}, {
  "id": 2,
  "name": "Nike Sportswear The 10: Air Vapormax FX",
  "price": 2499,
  "currency": "SEK",
  "image": "/2.jpg",
  "thumbnail": "/images/2-thumb.jpg",
  "description": "Fresh off being announced as the new Louis Vuitton Menswear Designer, his second Air Jordan 1 ÔÇ£WhiteÔÇØ and of course ÔÇ£The 10ÔÇØ, Virgil Abloh and his Off-White imprint are back at it with a new Nike collaboration."
}, {
  "id": 3,
  "name": "Jordan Brand Air Jordan 1",
  "price": 1899,
  "currency": "SEK",
  "image": "/3.jpg",
  "thumbnail": "/images/3-thumb.jpg",
  "description": "2017 was a great year for ÔÇ£The SwooshÔÇØ and a big chunk of that success is due to the Off White x Nike collaboration ÔÇ£The TenÔÇØ."
}, {
  "id": 4,
  "name": "adidas Originals Deerupt Runner",
  "price": 999,
  "currency": "SEK",
  "image": "/4.jpg",
  "thumbnail": "/images/4-thumb.jpg",
  "description": "The adidas Deerupt combines adidas running heritage of the ┬┤80s with new innovative lightweight technologies."
}, {
  "id": 5,
  "name": "Nike Running Air Vapormax Plus",
  "price": 2099,
  "currency": "SEK",
  "image": "/5.jpg",
  "thumbnail": "/images/5-thumb.jpg",
  "description": "Do you like it colorful and eye-popping? Than this Nike Air Max Plus ÔÇ£MultiÔÇØ is the real deal. 20 years ago, the Nike Air Max Plus was released and inspired by jacked palm trees and ocean sunsets all that by mixing flashy colorways with a small Swoosh."
}, {
  "id": 6,
  "name": "Jordan Brand Air Jordan 1 Retro High ",
  "price": 1599,
  "currency": "SEK",
  "image": "/6.jpg",
  "thumbnail": "/images/6-thumb.jpg",
  "description": "After much anticipation the Air Jordan 1 ÔÇ£Gold ToeÔÇØ is finally releasing. The mix of a white, black and gold patent leather upper brings a clean and ÔÇ£luxuriousÔÇØ touch to the iconic basketball shoe, previously seen on the similar ÔÇ£top 3ÔÇØ version."
}, {
  "id": 7,
  "name": "Jordan Brand Air Jordan XXXII CNY",
  "price": 1999,
  "currency": "SEK",
  "image": "/7.jpg",
  "thumbnail": "/images/7-thumb.jpg",
  "description": "First released in 2017, the Air Jordan 32 will now get its 2018 Chinese New Year treatment by the Jordan Brand family."
}, {
  "id": 8,
  "name": "Nike Sportswear Air Max 97/Plus",
  "price": 1849,
  "currency": "SEK",
  "image": "/8.jpg",
  "thumbnail": "/images/8-thumb.jpg",
  "description": "The expanding family of Nike hybrids is steadily growing. This time the Nike Air Max 97 Plus shows a Nike Air Max Plus, otherwise known as Nike TN, with a Nike Air Max 97 midsole, well recognizable for its big window."
}];
exports.products = products;

},{}]},{},[2]);
