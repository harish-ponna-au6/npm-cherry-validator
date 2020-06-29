# node.cherry-validator.js
___

##  Decription:

* This package is used to validate email(default options), password(default options) and customOptions text. If the email, password or customOptions text is not valid it will return a error message where there is an error, else it returns success message.


### Installation

    > npm install cherry-validator --save


### Usage:

   > Email and Password validation:
    > var cherry = require('cherry-validator')

    > var schema = { 
        userEmail : cherry.email('someone@email.com'),
                    // (default options(settings))
        userPassword: cherry.password('1234CherrY&')  // (default options(settings)) should contain 6-20 chars and one alphabet lower, alphabet upper, symbol, number.
        }

    > const result = cherry.validateSchema(schema)

    > console.log(result)  //{ success : { message : Valid Schema } }



    > var schema = { 
        userEmail : cherry.email('someone@email.com'),  // (default options(settings))
        userPassword : cherry.password('1234Cherr')     // (default options(settings)) should contain 6-20 chars and one alphabet lower, alphabet upper, symbol, number.
        }

    > var result = cherry.validateSchema(schema)

    > console.log(result)  // { error : { message : Invalid mobile } 

    / /Explanation :
    It gives error message of mobile as it is not having any symbol(special character).


   > CustomOptions text validation with custom settings
* In case if anyone wants to add custom password validations or text validations , they can use this customsOptions function in cherry-vaidator package.

        > var cherry = require('cherry-validator')

        > var schema = {
            text: cherry.customOptions('This is going to be validated 123.', { }, { }, { })
        }
    
#### Four parameters are present in this customOptions function.

**Important - You can either use second parameter or third parameter but not both. Even though if you take both , third parameter will override second parameter.**

* First parameter takes text-content to be validated.

* Second parameter takes object with following fields. This fields checks whether the poperties mentioned is present or not. It won't bother about other properties.

```
        {
            lowerCase:true, // or false(default)   
            upperCase:true, // or false(default)
            number:true,    // or false(default)
            symbol:true,    // or false(default)
        }

```
* Third parameter takes object with following fields. This fields checks whether the poperties mentioned is strictly present. It will not allow to have other properties.
```
        {
            lowerCaseOnly:true, // or false(default)   
            upperCaseOnly:true, // or false(default)
            numberOnly:true,    // or false(default)
            symbolOnly:true,    // or false(default)
        }

```
    
* Fourth parameter takes object with limits property with default limits of characters from  1-infinity
    ```
        { limit : [ 1,10 ] } // example of range 

    ```



> Second parameter utilization
        > var cherry = require('cherry-validator')

        > var schema = {
            text: cherry.customOptions('This is going to be Validated 123.', { lowerCase:true, upperCase:true }, { }, { limit: [ 1, 100 ] })
        }

        > var result = cherry.validateSchema(schema)

        > console.log(result)    // { success : { message : Valid schema } }

        // Explanation: 
        It gives success message as their are lowercase and uppercase letters in the given text content. It dooesn't bother about other numbers or symbols



        > var schema = {
            text: customOptions('This is going to be Validated 123.', { lowerCase:true, upperCase:true }, { }, { limit : [ 1, 100 ] })
            userName : cherry.customOptions('cherry validator', { lowerCase:true, upperCase:true }, { }, { limit :  1, 100 })
        }

        > var result = cherry.validateSchema(schema)

        > console.log(result)  // { error : { message : invalid text } }

        // Explanation : 
        It gives error message as their is no uppercase letters in the given userName content.



> Third parameter utilization
        > var validateMe = require('cherry-validator')
        
        > var schema = {
            mobile : cherry.customOptions('8977700960', { }, { numbersOnly : true}, { limit: [ 10, 10 ] })
            userName : cherry.customOptions('Cherry Validator', { }, { lowerCaseOnly : true, upperCaseOnly : true }, { })
        } 

        > var result = cherry.validateSchema(schema)

        > console.log(result) // { success : { message : Valid Schema }} 

        // Explanation :
        In gives success message as mobile content having only numbers with 10 digits without any other characters and userName has lowercase, uppercase letters without any other symbols or numbers.



        > var schema = {
            mobile : cherry.customOptions('89777A0096', { }, { numbersOnly : true}, { limit: [ 10, 10 ] })
            userName : cherry.customOptions('Cherry Validator', { }, { lowerCaseOnly : true, upperCaseOnly : true }, { })
        } 

        > var result = cherry.validateSchema(schema)

        > console.log(result) // { error : { message : Invalid mobile }} 

        // Explanation:
        In gives error message as mobile content having alphabet and number where it mentioned to have only numbers with 10 digits without any other characters.



*ES6 syntax :*<br/>
*const { email, password, customOptions, validate} = require('cherry-validator')*<br/>
*Total 4 functions in the module*<br/>

**Important - You can either use second parameter or third parameter but not both. Even though if you take both , third parameter will override second parameter.**












