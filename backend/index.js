const express = require("express");
const app = express();

//navigation take from frontend

/* tables to be made 

1.user's table - 
-> name
-> email  
-> passwword (hashed value)
-> phone number
-> gender


2. address table -
-> user id (links the address to  user table)
-> State
-> City
-> PinCode
-> PhoneNumber
-> FullAddress

3. payment method table
-> user id    //ref to which table ?
-> last 4 digits
-> expiration
-> cvc
-> name on card


4. restaurants table -
-> logo
-> name
-> tagline
-> rating
-> review count
-> cover product image
-> categories {array} 


5. food table -
-> restaurant id
-> name
-> description
-> price
-> image 
-> category // will this ref ? to which table ?


6. review table - 
-> restaurant id  // Ref ? to table food table
-> user id  //ref to which table ?
-> rating
-> content
-> location


7. cart table - 
-> user id   //ref to which table ?
-> subtotal
-> discount
-> delivery fee
-> total
-> item (array of food item ids as items are added and deleted) // what to add ?
-> deleted at (time stamp)   // what to add ?     // active cart : null value deleted at , deletd cart : timestamp when user checkts out                           




*/
