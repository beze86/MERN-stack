import { useState, useEffect } from 'react';
import axios from 'axios';

import { AddtoList } from './AddToList/AddToList';
import { ListItem } from './ListItem/ListItem';

import styles from './ShoppingList.module.scss';

export const ShoppingList = () => {
    const [items, setItems] = useState([]);

    // task: check fo useeffect state loop when dependency added
    useEffect(() => {
        
        const fetchItems = async () => {
            try {
                const { data } = await axios.get(`/shopping-list`)
                setItems(data);
            } catch (err) {
                throw err
            }
        }
        fetchItems();
    }, [])

    const addItemToList = (item, {data:{data }}) => {
        const newItem = {
            _id: data.insertedId,
            item: item.item,
            urgency: item.urgency
        }
        const newItems = [...items, newItem]
        setItems(newItems)
    }

    const deleteItemFromList = (id) => {
        const index = items.findIndex((item) => {
            return item._id === id
        })

        const newItems = [...items]

        newItems.splice(index, 1)

        setItems(newItems)
    }

    return (
        <div className={styles.wrapper}>
            <AddtoList addItem={addItemToList} />
            {items.length > 0 ? (
                items.map((item) => {
                    return <ListItem data={item} key={item._id} deleteItem={deleteItemFromList} />
                })
            ) : 'Add items first'}
        </div>
    )
}