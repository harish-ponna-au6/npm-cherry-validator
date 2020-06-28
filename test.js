const { email, password, input } = require('./validateMe')

// var {error, success} = email("haris@gmail.ogg")
// console.log(error,success)


// var { error, success } = password("haris1A@gmail.og")
// console.log(error, success)

var { error, success } = input('1234567890', { },{numberOnly:true },{limit:[10,10]})
console.log(error, success)

