function giveMeCat() {
  return 'dog';
}

test('giveMeCat() returns cat', () => {
  expect(giveMeCat()).toBe('cat');
});
