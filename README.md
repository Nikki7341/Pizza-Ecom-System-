# React Pizza Ecom System
## Here is the Active link of the site 

https://nikki7341.github.io/Pizza-Ecom-System-/

## What I've Done in this 
- Design Cart Using HTML and CSS
- Implement React Components For Product List, Cart
- Creating Animations Using React-Reveal and Add Routes using React-Routers
- Publish Project on the Github

## Tech Used
- HTML and CSS.
- Basic JavaScript.
- React
## Tools and Technologies
- Arrow Function 
- Array Function
- Spread Operator 
- React-router-dom
- React-modal
## Table of Contents
### Introduction
#### 1. Introduction
- Functional Pizza Cart
- Sort Products By Price High or Low
- Open Modal By Click on Product
- Add Product To Cart using Animation
- Handle Multiple Click By Adding More Items
- Remove Product
- Show Checkout Form
#### 2. Create React App
- Open VS Code and open terminal
- cd Desktop
- npx create-react-app pizzaapp
- Remove unused files
- Convert App.js Class Component
- Add header, main and footer
- Update index.css to add grid
-Project Development Workflow

#### 3. Products Component
- Create data.json {products:[{_id, title, ...}]
- Update App.js to import data.json
- div.content {flex, wrap}
- div.main {flex: 3 60rem}
- div.sidebar {flex: 1 20rem;}
- Create components/Products.js component
- Add it to div.main in App.js and set products props
- ul.products {flex,center, center,warp, p:0,m:0, style:none}
- this.props.products.map(p => li.key={p._id} {flex, p:1, m:1, none,h:47}
- div.product { flex, column, space-between, h:100%}
- a href="#" > img {max-width, max-height:37} + p {p.title}
- div.product-price > div.product.price + button.button.primary Add to cart
- product-price {flex, space-between, center}
- div {p.price} flex: 1; align: center; size: 2rem
- button.button.primary Add To Cart
#### 4.Filter Component
- Create components/Filter.js
- Add it above Products component in App.js
- Update Filter.js render
- div.filter {flex, wrap, p,m:1rem, border-bottom: .1rem}
- filter-result {this.props.filteredProducts.length}
- filter-sort {flex:1}
- label Order select value=this.props.sort
- onChange= this.props.sortProducts(e.t.value)
- option lowestprice Lowest, ...
- filter-size {flex:1}
- App.js
- Add Filter Component
#### 5.Cart Component
- Product.js
- Handle "Add To Cart" to this.props.addToCart(product)
- App.js
- Add cartItems to state as []
- Create addToCart(product)
- Slice, Check product existance, add to cartitems
- Cart.js
- Define cartItems from this.props
- Check cartItems.length and show message
- List cartItems {cartItems.length > 0 && (}
- index.css
- Style cart, cart-header, cart-items (img, li),
-Publish changes
#### 6.Checkout Form
- Cart.js
- Make cart items persistent
- Use LocalStorage on App constructor to load cart items (JSON.parse)
- Use LocalStorage on addToCart to save cart items (JSON.stringify)
- Handle Click on Proceed
- Update showCheckout state to true on click
- Conditional rendering Checkout Form
- Get Email, Name and Address required input
- Define handleInput function
- Add Checkout Button
- Handle onSubmit Form Event by this.createOrder
- Create order object and pass to parent to handle it
#### 7.Add Modal and Animation
- Show Animation
- **Install react-reveal**
- Create fade effect from bottom for products
- Create fade left for add to cart
- Create fade right for show checkout form
- Open Modal by click on product image
- **Install react-modal**
- Products.js
- Import Modal
- Set state for product to null
- Define openModal and closeModal
- Show Modal if product exist
- Create Modal
- Create zoom effect for modal
- index.css
- Style Product Details
- ***Commit and Publish changes***
- ***Pull request, merge, change to master***
