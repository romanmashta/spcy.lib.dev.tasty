import '../dist/index';

test('Self test', () => {
  const hello = {
    hello: 'world',
    world: {
      hello: true
    }
  };
  expect(hello).toMatchTastyShot('self test');
});

test('Self typed test', () => {
  const hello = {
    hello: 'world',
    world: {
      hello: true
    }
  };
  expect(hello).toMatchTastyShot('self typed test', 'world');
});
