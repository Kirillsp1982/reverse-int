module.exports = function reverse (n) {
  return +n.toString().split('').filter(x => x >= 0).reverse().join('');
}
