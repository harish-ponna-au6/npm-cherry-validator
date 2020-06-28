# node.validateME.js
___

##  Decription:

* This package is used to validate email, password and text. If the email, password or text is not valid it will return a error message else it returns success message.


### Installation
    > npm install validateMe --save


### Usage:

   > Email validation:

    > const validateMe = require('validateMe')



    > emailId = someone@email.com

    > const emailCheck = validateMe.email(emailId)

    > console.log(emailCheck)  //{success:{message:Valid Email}}



    > emailId = someone@email.c

    > const emailCheck = validateMe.email(emailId)

    > console.log(emailCheck)  //{error:{message:Invalid Email}}




   > ### Password validation:

    > const validateMe = require('validateMe')



    > pswd = tHisiSPa$sword1  // should contain 6-20 chars and one alphabet lower, alphabet upper, symbol, number.

    > const passwordCheck = validateMe.password(pswd)

    > console.log(emailCheck)  //{success:{message:Valid Password}}



    > pswd = tHisiSPaswordfails  // should contain 6-20 chars and one alphabet lower, alphabet upper, symbol, number.

    > const passwordCheck = validateMe.password(pswd)

    > console.log(emailCheck)  //{error:{message: Invalid Password}}



   > Custom input validation with custom settings

* In case if anyone wants to add custom password validations or text validations , they can use this text function in validateMe package.

        > const validateMe = require('validateMe')

        > const textContent = 'This is going to be validated.'

        > const textCheck = validateMe.input(textContent , { }, { },{ })
    
        //Three parameters in input function.
            > First parameter takes text-content to be validated.

            > Second parameter takes object with following fields. This fields checks whether the poperties mentioned is present or not. It won't bother about other properties.
            ```
                {
                    lowerCase:true, // or false   
                    upperCase:true, // or false
                    number:true,    // or false
                    symbol:true,    // or false
                }

                ```
            > Third parameter takes object with following fields. This fields checks whether the poperties mentioned is strictly present. It will not allow to have other properties.
                ```
                    {
                        lowerCaseOnly:true, // or false   
                        upperCaseOnly:true, // or false
                        numberOnly:true,    // or false
                        symbolOnly:true,    // or false
                    }

                    ```
                
            > Fourth parameter takes object with limits property with default limits of characters from  1-infinity
                ```
                    { limits:[1,10] } // example of range 

                    ```



        * Second parameter utilization

        > const validateMe = require('validateMe')
            
        > const textContent = 'This is going to be validated.'

        > const textCheck = validateMe.input(textContent , { lowerCase:true, upperCase:true }, { },{1,100 })

        > console.log(textCheck) // //{success:{message:Valid input textContent}}




            > const textContent = 'This is going to be validated.'

            > const textCheck = validateMe.input(textContent , { lowerCase:true, upperCase:true,number:true }, { },{1,100 })

            > console.log(textCheck) // //{error:{message:Invalid input textContent}}






            * Third parameter utilization

            > const validateMe = require('validateMe')
            
            > const textContent = 'This is going to be Validated.'

            > const textCheck = validateMe.input(textContent, { }, { lowerCaseOnly:true },{1,100 })

            > console.log(textCheck) // {error:{message:Invalid input textContent}} 
            



            > const textContent = 'This is going to be validated.'

            > const textCheck = validateMe.input(textContent ,{ }, { lowerCaseOnly:true, upperCaseOnly:true }, {1,100 })

            > console.log(textCheck) // {success:{message:Valid input textContent}}



**Important - You can either take second parameter or third parameter. Even though if you take both , third parameter will override second parameter.**









