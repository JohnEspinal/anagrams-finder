const findAnagrams = require('./index.js');
const prtxt = require('./index.js');

let anagrams = findAnagrams(["azul", "luza", "maro", "omar"]);

test('test_1', () => {
  
  let expected = [['azul','luza'],['maro','omar']];
  expect(anagrams).toStrictEqual(expected);
});