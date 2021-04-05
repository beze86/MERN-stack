import { useState } from 'react'; 
import { AddtoList } from './AddToList/AddToList';

import './ShoppingList.css';

export const ShoppingList = () => {
    const [items, setItems] = useState([]);

    return (
        <div className="shopping-wrapper">
            <AddtoList/>
            {items.length > 0 ? (
                items.map((items) => {
                    return items.name
                })
            ): 'Add items first'}
        </div>
    )
}