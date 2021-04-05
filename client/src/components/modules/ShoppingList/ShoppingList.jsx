import { useState, useEffect } from 'react';
import axios from 'axios';

import { AddtoList } from './AddToList/AddToList';
import { ListItem } from './ListItem/ListItem';

import styles from './ShoppingList.module.scss';

export const ShoppingList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/shopping-list`)
            .then(({ data }) => {
                setItems(data)
            })
            .catch((err) => {
                throw err
            })

    }, [])
    
    return (
        <div className={styles.wrapper}>
            <AddtoList />
            {items.length > 0 ? (
                items.map((item) => {
                    return <ListItem data={item} key={item._id}/>
                })
            ) : 'Add items first'}
        </div>
    )
}