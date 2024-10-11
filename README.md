# Online-Car-Shop
This project is a set of tasks i had to do. Looks like some online car shop.  
https://hrnjez.github.io/Online-Car-Shop/
***
## Important
>       var username = logInProductsList[i].ContactName;
>       var password = logInProductsList[i].CustomerID;
***
Task description
The aim of the project is to create a webshop where the user has insight into products in two categories. The first one
the category is hooked products (Part I of the project) and the second category is data obtained from the server (Part II
project). The user has the ability to add the product to the cart, view the basket, remove the product from
baskets and advanced search.
The project is done from scratch, the focus is on the javascript itself. Any innovation regarding the code itself,
site or style options are welcome and can carry up to 5 bonus points.
1. Create an HTML page that contains some type of menu where the user has the options "My Shop" and "Online."
Shop ”and a basket
a. "My Shop" leads to the first part of the project assignment and displays the products defined in
to JS himself.
The "My Shop" part should contain in the JS itself a "Products" object that contains a list of products.
The product model should have a format. There are at least 15 products out of which at least 2 are missing
on count. The product is not available if the value UnitsInStock = 0. "Discount" politeness: "0" means
that the product has no discount. You need to have between 2 and 7 discounted products.

{
"ProductID": 1,
"ProductName": "Chai",
"SupplierID": 1,
"CategoryID": 1,
"UnitPrice": "18.0000",
"UnitsInStock": 39,
"Discount": "20%"
}

3. In the "My Shop" section, list on the HTML itself all the products contained in the product object and
have them in stock (Product is in stock if UnitsInStock value is greater than 0). Every product
should have the Add to Cart option.

4. When adding to the cart, the user should have the option of how many products they want to buy. This can
to be realized as a simple input next to the "Add to Dill" button. There's room here
implements another form of counter for product quantity.
5. After being added to the basket, the product or products are packed in a new basket object. Which is available
by clicking the basket button on the menu.
6. In the menu next to the basket button, the user always has a counter where it says how much
The product is currently in the basket.
7. If the user adds to the basket a product that has a value of "Discount" type 20%, 30%, etc. It counts
the discount the user received. If the product value is 1500 a "Discount": "20%", then the user
receives a message that he has received a 20% discount and that the value of the product is 1200. The product enters the cart
at a discount.
8. Clicking on the “Shopping Cart” button lists the user with all the products that he has inserted in the cart. Next to
each product has the following values.
a. Product name
b. The sum that represents the amount of that product thrown into the cart.
c. Product price
d. The total amount that represents the total price of that product
e. Remove the button from the basket
f. An input that records how many products of this type we want to remove from the basket
Mr Rücker At the bottom of the basket, the user has information on the total value of all products in the basket.
h. Below the total value, the user has the option to remove all products from the basket

If a user enters more than the available product into any of the inputs he / she receives a message that
an error occurred and he did not have to enter a number less than or equal to a certain number.
Example:
1) If the user tries to add in the bucket 7 products of type “Huaweii p30” and in the object “Products”
has 5 "UnitsInStock": 5. The user receives an error that he cannot enter a number greater than 5

2) If the user tries to remove from the basket 7 products of the “Huaweii p30” type and there are 5 products of the type in the basket.
The user gets the error that they cannot enter a number greater than 5
