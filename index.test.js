const findAnagrams = require('./index.js');
const prtxt = require('./index.js');



test('test_1', () => {
  
  let expected = [['azul','luza'],['maro','omar']];
  expect(findAnagrams(["azul", "luza", "maro", "omar"])).toStrictEqual(expected);
});


test('test_2', () => {
  
  let expected = [['Casa','SaaC'],['Hogar','Rogah']];
  expect(findAnagrams(["Casa","SaaC" ,"Hogar", "Rogah", "Ciudad"])).toStrictEqual(expected);
});

