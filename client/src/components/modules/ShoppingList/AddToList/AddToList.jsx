import { useState } from 'react';
import { TextField, Button, MenuItem } from "@material-ui/core";
import axios from 'axios';
import clsx from 'clsx';

import styles from './AddToList.module.scss';

export const AddtoList = ({addItem}) => {
    const [itemData, setItemData] = useState({ item: '', urgency: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(itemData.item.length === 0 || itemData.urgency.length === 0) {
            return
        }
        axios.post(`${process.env.REACT_APP_API_URL}/shopping-list/item`, { itemData })
            .then((data) => {
                addItem(itemData, {data})
                setItemData({ item: '', urgency: '' })
            })
            .catch((err) => {
                throw err
            })
    }

    const handleItemChange = (e) => {
        setItemData({ ...itemData, item: e.target.value })
    }

    const handleUrgencyChange = (e) => {
        setItemData({ ...itemData, urgency: e.target.value })
    }

    return (
        <form className={styles.wrapper} onSubmit={handleSubmit}>
            <TextField className={clsx(styles.input, styles['input-item'])} label="Item to buy" value={itemData.item} onChange={handleItemChange} />

            <TextField className={clsx(styles.input, styles['input-urgency'])} label="Urgency" value={itemData.urgency} select onChange={handleUrgencyChange}>
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Normal">Normal</MenuItem>
            </TextField>

            <Button className={styles.button} type="submit" variant="contained" color="primary">Add</Button>
        </form>
    )
}
