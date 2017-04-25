const Dog = require('./index')
  , test = require('tape');

test('should bark', (assert) => {
  let dog = new Dog();
  let result = dog.bark();

  assert.equal(result, "The any dog says HauHau");
  assert.end();
});