# node.validateME.js
___

##  Decription:

* This package is used to validate email, password and text. If the email, password or text is not valid it will return a error message else it returns success message.


### Installation
    > npm install validateMe --save


### Usage:

#### Password validation:

    > const validateMe = require('validateMe')

    > emailId = someone@email.com
    > const emailCheck = validateMe.email(emailId)
    > console.log(emailCheck)  //{success:{message:Valid Email}}

    > emailId = someone@email.c
    > const emailCheck = validateMe.email(emailId)
    > console.log(emailCheck)  //{error:{message:Invalid Email}}

#### Password validation:

    > const validateMe = require('validateMe')

    > pswd = tHisiSPa$sword1  // should contain 6-20 chars and one alphabet lower, alphabet upper, symbol, number.
    > const passwordCheck = validateMe.password(pswd)
    > console.log(emailCheck)  //{success:{message:Valid Password}}

    > pswd = tHisiSPaswordfails  // should contain 6-20 chars and one alphabet lower, alphabet upper, symbol, number.
    > const passwordCheck = validateMe.password(pswd)
    > console.log(emailCheck)  //{error:{message: Invalid Password}}

#### Custom text validation with custom settings

* In case if anyone wants to add custom password validations or text validations , they can use this text function in validateMe package.

        > const validateMe = require('validateMe')

        > const textToBeValidated = 'This is going to be validated.'

        > kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk






