/* TODO 2: Defined a function with identifier addItem, which does the following:
a) Increments the number of items in the cart
b) Prints a message "Item added to cart!" on the console
c) Prints a message "Item(s) in cart = numberOfItemsInCart" on the console, where numberOfItemsInCart is replaced by the actual number
*/

/* TODO 3: Defined a function with identifier removeItem, which does the following:
a) Decrements the number of items in the cart
b) Prints a message "Item removed from cart!" on the console
c) Prints a message "Item(s) in cart = numberOfItemsInCart" on the console, where numberOfItemsInCart is replaced by the actual number
*/

/* TODO 1: Declare a variable with identifier itemsInCart in your code and initialize it with 0. 

Figure out the proper place where this variable needs to be declared.
*/
  var itemsInCart=0;
/* TODO 2: Defined a function with identifier addItem, which does the following:
a) Increments the number of items in the cart
b) Prints a message "Item added to cart!" on the console
c) Prints a message "Item(s) in cart = numberOfItemsInCart" on the console, where numberOfItemsInCart is replaced by the actual number
*/
function addItem(){
 
    return{
        add: function(){
            console.log("Item added to cart!");
            itemsInCart++
        },
        getCount: function(){
            console.log("Item(s) in cart = "+itemsInCart);
        }
    }
   }addItem()
/* TODO 3: Defined a function with identifier removeItem, which does the following:
a) Decrements the number of items in the cart
b) Prints a message "Item removed from cart!" on the console
c) Prints a message "Item(s) in cart = numberOfItemsInCart" on the console, where numberOfItemsInCart is replaced by the actual number
*/
function removeItem(){
    return{
        remove: function(){
            console.log("Item removed from cart!");
            itemsInCart--
        },
        getCount: function(){
            console.log("Item(s) in cart = "+itemsInCart);
        }
    }
   }removeItem()
// WARNING: DO NOT EDIT THE CODE GIVEN BELOW
console.log("Initially: Item(s) in cart = " + itemsInCart);
addItem();
addItem();
removeItem();


