import Buyable from './Buyable';

export default class Goods implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly year: number,
        readonly country: string,
        readonly model: string,
        readonly goods: true,
    ) { }
}
