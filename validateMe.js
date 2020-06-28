const validateMe = {
    email: (mail) => {
        if (!mail) return ({ error: { message: 'enter email parameter in the function' } })
        let regex = /^([a-zA-Z0-9_\.\-]{3,50})+\@([a-zA-Z0-9\-]{3,})+\.(com|org|net|int|edu|gov)+$/g
        if (!regex.test(mail)) return ({ error: { message: 'invalid mail' } })
        return ({ success: { message: "valid mail" } })
    },
    password: (pass) => {
        if (!pass) return ({ error: { message: 'enter password parameter in function' } })

        var regex = new RegExp(`^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W|_])[a-zA-Z0-9\\W_]{6,16}$`)
        if (!regex.test(pass)) return ({ error: { message: 'invalid password(chars(6-20),1 upper, 1 lower, 1 number, 1 symbol)' } })
        return ({ success: { message: 'valid password' } })

    },
    input: (text, options = { lowerCase: false, upperCase: false, number: false, symbol: false }, optionsOnly = { lowerCaseOnly: false, upperCaseOnly: false, numberOnly: false, symbolOnly: false }, limits = { limit: [1,] }) => {
        if (!text) return ({ error: { message: 'pass valid input parameter in function' } })

        var a = limits.limit[0];
        var b = limits.limit[1];
        if (limits) {
            if (a && b) {
                if (a < b) {
                    var x = a;
                    var y = b;
                }
                else {
                    var x = b;
                    var y = a;
                }
            }
            else if (a) {
                var x = a;
                var y = '';
            }
            else {
                var x = '';
                var y = b;
            }
            var regex = new RegExp(`[a-zA-Z0-p\\W_]{${x},${y}}`)
            if (!regex.test(text)) return ({ error: { message: 'number of characters are not in limits in text' } })
        }
        if (optionsOnly.lowerCaseOnly === true || optionsOnly.upperCaseOnly === true || optionsOnly.numberOnly === true || optionsOnly.symbolOnly === true) {
            if (optionsOnly.lowerCaseOnly === true) {
                var zm = '(?=.*[a-z])'
                var m = 'a-z'
            }
            else {
                var zm = ''
                var m = ''
            }
            if (optionsOnly.upperCaseOnly === true) {
                var zn = '(?=.*[A-Z])'
                var n = 'A-Z'
            }
            else {
                var zn = ''
                var n = ''
            }
            if (optionsOnly.numberOnly === true) {
                var zo = '(?=.*[0-9])'
                var o = '0-9'
            }
            else {
                var zo = ''
                var o = ''
            }
            if (optionsOnly.symbolOnly === true) {
                var zp = '(?=.*[\\W|_])'
                var p = '\\W_'
            }
            else {
                var zp = ''
                var p = ''
            }
            var regex = new RegExp(`^${zm}${zn}${zo}${zp}[${m}${n}${o}${p}]+$`)
            if (!regex.test(text)) return ({ error: { message: 'invalid input' } })
            return ({ success: { message: 'valid text' } })
        }

        if (!options.lowerCase && !options.upperCase && !options.number && !options.symbol && !options.limit && !optionsOnly.lowerCase && !optionsOnly.upperCase && !optionsOnly.number && !optionsOnly.symbol && !options.limit) return ({ success: { message: 'valid text' } })
        if (options.lowerCase === true) {
            var zm = '(?=.*[a-z])'
            var m = 'a-z'
        }
        else {
            var zm = ''
            var m = ''
        }
        if (options.upperCase === true) {
            var zn = '(?=.*[A-Z])'
            var n = 'A-Z'
        }
        else {
            var zn = ''
            var n = ''
        }
        if (options.number === true) {
            var zo = '(?=.*[0-9])'
            var o = '0-9'
        }
        else {
            var zo = ''
            var o = ''
        }
        if (options.symbol === true) {
            var zp = '(?=.*[\\W|_])'
            var p = '\\W_'
        }
        else {
            var zp = ''
            var p = ''
        }
        var regex = new RegExp(`${zm}${zn}${zo}${zp}[${m}${n}${o}${p}]+`)
        if (!regex.test(text)) return ({ error: { message: 'invalid input' } })
        return ({ success: { message: 'valid text' } })
    }
}


module.exports = validateMe


