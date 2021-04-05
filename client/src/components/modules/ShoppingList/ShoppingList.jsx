import { useState } from 'react'; 
import { AddtoList } from './AddToList/AddToList';

import styles from  './ShoppingList.module.scss';

export const ShoppingList = () => {
    const [items, setItems] = useState([]);

    return (
        <div className={styles.wrapper}>
            <AddtoList/>
            {items.length > 0 ? (
                items.map((items) => {
                    return items.name
                })
            ): 'Add items first'}
        </div>
    )
}