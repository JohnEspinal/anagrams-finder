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

test('test_3', () => {
  
  let expected = [['Casa','SaaC'], ['azul', 'zula'],['Hogar','Rogah'],['iaucdd','ciudad']];
  expect(findAnagrams(["Casa","SaaC","azul","zula" ,"Hogar", "Rogah",'iaucdd',"ciudad"])).toStrictEqual(expected);
});

test('test_4', () => {
  
  let expected = [['Casa','SaaC'], ['azul', 'zula'],['Hogar','Rogah'],['iaucdd','ciudad','diucda','cuidda']];
  expect(findAnagrams(["Casa","SaaC","azul","zula" ,"Hogar", "Rogah",'iaucdd',"ciudad",'diucda','cuidda'])).toStrictEqual(expected);
});
test('test_5', () => {
  
  let expected = [['Casa','SaaC'], ['azul', 'zula'],['Hogar','Rogah'],['iaucdd','ciudad','diucda','cuidda']];
  expect(findAnagrams(["Casa","SaaC","azul","zula" ,"Hogar", "Rogah",'iaucdd',"ciudad",'diucda','cuidda','cuidda'])).toStrictEqual(expected);
});

