import Cart from '../service/Cart';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.size).toBe(0);
});

test('add item (not goods)', () => {
    const cart = new Cart();
    const test = {
        id: 1,
        name: 'test',
        price: 100
    };
    cart.add(test, 10);
    expect(cart.items.size).toBe(1);
});

test('add item (not goods), check the quanity - should be 1 in cart', () => {
    const cart = new Cart();
    const test = {
        id: 1,
        name: 'test',
        price: 100
    };
    cart.add(test, 10);

    expect(cart.items.get(test)).toBe(1);
});

test('add goods, check the quanity', () => {
    const cart = new Cart();
    const test = {
        id: 1,
        name: 'test',
        price: 100,
        goods: true
    };
    cart.add(test, 10);

    expect(cart.items.get(test)).toBe(10);
});

test('can\'t add an item twice', () => {
    const cart = new Cart();
    cart.add({
        id: 1,
        name: 'test',
        price: 100
    }, 1);
    cart.add({
        id: 1,
        name: 'test',
        price: 100
    }, 1);

    expect(cart.items.size).toBe(1);
});

test('calculate amount of the cart', () => {
    const cart = new Cart();
    cart.add({
        id: 1,
        name: 'test',
        price: 100,
        goods: true
    }, 10);
    expect(cart.calcAmount()).toBe(1000);
});

test('calculate amount of the cart with discount', () => {
    const cart = new Cart();
    cart.add({
        id: 1,
        name: 'test',
        price: 100,
        goods: true
    }, 10);
    expect(cart.calcAmountWithDiscount(10)).toBe(900);
});

test('remove item in the cart', () => {
    const cart = new Cart();
    cart.add({
        id: 1,
        name: 'test',
        price: 100
    }, 10);
    cart.removeItem(1);

    expect(cart.items.size).toBe(0);
});

test('increase quanity of goods', () => {
    const cart = new Cart();
    const test = {
        id: 1,
        name: 'test',
        price: 100,
        goods: true
    };
    cart.add(test, 10);
    cart.increaseQuantity(1);

    expect(cart.items.get(test)).toBe(11);
});

test('can\'t increase quanity of other items', () => {
    const cart = new Cart();
    const test = {
        id: 1,
        name: 'test',
        price: 100,
    };
    cart.add(test, 10);
    cart.increaseQuantity(1);

    expect(cart.items.get(test)).toBe(1);
});

test('reduce quanity of goods', () => {
    const cart = new Cart();
    const test = {
        id: 1,
        name: 'test',
        price: 100,
        goods: true
    };
    cart.add(test, 10);
    cart.reduceQuantity(1);

    expect(cart.items.get(test)).toBe(9);
});

test('can\'t reduce quanity of other items', () => {
    const cart = new Cart();
    const test = {
        id: 1,
        name: 'test',
        price: 100,
    };
    cart.add(test, 10);
    cart.reduceQuantity(1);

    expect(cart.items.get(test)).toBe(1);
});