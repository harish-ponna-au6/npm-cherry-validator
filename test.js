const {email,password,text} = require('./validateMe')

const {error,success} = email("haris@gmail.org") 
console.log(error)
console.log(success)