module.exports = function reverse (num) {
    let bum = '' + Math.abs(num);
    return bum.split('').reverse().join('');
}