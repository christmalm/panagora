# Panagora Code Test

## What's here?

- `design/` styleguide and site design
- `images/` a couple of product images
- `static/` static assets that you will need
- <PRODUCT_ID>.json
- products.json
- empty `index.html`

## Javascript libraries

- handlebars.js
- less.js

## Instructions

The idea here is to build a single page application with JavaScript. We have provided a set of libraries that we want you to use to achieve this (see above).

You will find the styleguide and site design in `design/`. We want this implemented.

In `data/` you will find a couple of json files that will act as your "backend". `products.json` holds a list of simplified product representations and `<PRODUCT_ID>.json` is an actual product representation.

On one page we want all products rendered. When clicking on one of the products we want to see a product page with full product info and a form to add the product to a cart. Layout this page however you want but use the design elements from the styleguide.

**Important:** Please tell us how much time you spent on this and describe your work to us! Just a couple of sentences of each step you took or if something was unclear and how you solved it.

## Tips

We will only test your site in the newest Chrome/Firefox browser so feel free to use `html5`, `css3`, `es6`, `canvas` or anything else you need. If you need to use a nightly build don't forget to tell us!

## Start to finish
First a took your product json file and did a product.js
file with all the data.
I used npm to load less and handlebars.
somehow i coulnt load your handlebar file.
First problem to solve was to use browersify and babelify
to solve imports problem. 
i used less watch compiler for auto compiling css.
I also used a live server.
i used some font from Google cause i dont think you provide me with a font family and also icons from
fontawsome.
The biggest issue i had was that i never ever used Handlebars and not much plain vanilla javascript.
So was struggling long time with the each block and the syntax.
I think the overall time was 30 hours and around 5-6 hours of that figuring out how to use babelify and browserify and Less.
## To set up my project
When cloning do a npm install and use a live server.  
