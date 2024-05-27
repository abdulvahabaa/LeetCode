/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let strNumber = x.toString()
    let reversedStrNmuber = strNumber.split('').reverse('').join('')
    return strNumber===reversedStrNmuber
}