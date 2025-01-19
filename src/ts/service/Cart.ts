import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        if (!this._items.some((el) => el.id === item.id)) {
            this._items.push(item);
        }
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    calcAmount(): number {
        return this._items.reduce((acc, item) =>  acc + item.price, 0)
    }
    calcAmountWithDiscount(discount: number): number {
        return this.calcAmount() * ((100 - discount) / 100)
    }

    removeItem(id: number): void {
        this._items = this._items.filter(item => item.id !== id)
    }
}