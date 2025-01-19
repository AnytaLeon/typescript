import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Map<Buyable, number> = new Map;

    add(item: Buyable, quantity: number): void {
        if(item.goods) {
            this._items.set(item, quantity);
        } else {
            if (![...this._items.keys()].some((el) => el.id === item.id)) {
                this._items.set(item, 1);
            }
        }  
    }

    get items(): Map<Buyable, number> {
        return this._items; 
    }

    calcAmount(): number {
        let amount = 0;
        for (let [item, quantity] of this._items.entries()) {
           amount = amount + (item.price * quantity)
        };
        return amount;
    }

    calcAmountWithDiscount(discount: number): number {
        return this.calcAmount() * ((100 - discount) / 100)
    }

    removeItem(id: number): void {
        for (let item of [...this._items.keys()]) {
            if(item.id === id) {
                this._items.delete(item)
            }
        };
    }

    reduceQuantity(id: number): void {
        for (let [item, quantity] of this._items.entries()) {
            if(item.id === id && item.goods) {
                this._items.set(item, --quantity);
            }
        }
    }

    increaseQuantity(id: number): void {
        for (let [item, quantity] of this._items.entries()) {
            if(item.id === id && item.goods) {
                this._items.set(item, ++quantity);
            }
        }
    }

}

// export default class Cart {
//     private _items: Buyable[] = [];

//     add(item: Buyable): void {
//         if(item.goods) {
//             this._items.push(item);
//         } else {
//             if (!this._items.some((el) => el.id === item.id)) {
//                 this._items.push(item);
//             }
//         }  
//     }

//     get items(): Buyable[] {
//         return [...this._items]; 
//     }

//     calcAmount(): number {
//         return this._items.reduce((acc, item) =>  acc + item.price, 0)
//     }
//     calcAmountWithDiscount(discount: number): number {
//         return this.calcAmount() * ((100 - discount) / 100)
//     }

//     removeItem(id: number): void {
//         this._items = this._items.filter(item => item.id !== id)
//     }
// }