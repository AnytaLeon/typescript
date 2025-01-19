import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Goods from './domain/Goods';

const cart = new Cart();
console.log(cart.items);

// cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225), 10);
// cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900), 1);
// cart.add(
//     new Movie(
//       1011,
//       "The Avengers",
//       "Marvel",
//       2500,
//       2012,
//       "USA",
//       "Avengers Assemble!",
//       ["action movie", "fantastic"],
//       "137 мин"
//     ), 20
//   );
cart.add(new Goods(
  1,
  'test',
  100,
  2024,
  'China',
  'test',
  true), 100);

// console.log(cart.items.entries());
console.log(cart.calcAmount());
// console.log(cart.calcAmountWithDiscount(10));
// cart.removeItem(1001);

cart.increaseQuantity(1);
console.log(cart.items);
