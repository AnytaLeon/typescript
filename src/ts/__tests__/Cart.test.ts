import Cart from '../service/Cart';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add item', () => {
    const cart = new Cart();
    cart.add({
        id: 1,
        name: 'test',
        price: 100
    });

    expect(cart.items.length).toBe(1);
});

test('can\'t add an item twice', () => {
    const cart = new Cart();
    cart.add({
        id: 1,
        name: 'test',
        price: 100
    });
    cart.add({
        id: 1,
        name: 'test',
        price: 100
    });

    expect(cart.items.length).toBe(1);
});

test('calculate amount of the cart', () => {
    const cart = new Cart();
    cart.add({
        id: 1,
        name: 'test',
        price: 100
    });
    expect(cart.calcAmount()).toBe(100);
});

test('calculate amount of the cart with discount', () => {
    const cart = new Cart();
    cart.add({
        id: 1,
        name: 'test',
        price: 100
    });
    expect(cart.calcAmountWithDiscount(10)).toBe(90);
});

test('remove item in the cart', () => {
    const cart = new Cart();
    cart.add({
        id: 1,
        name: 'test',
        price: 100
    });
    cart.removeItem(1);

    expect(cart.items.length).toBe(0);
});