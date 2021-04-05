import { useState } from 'react';
import { TextField, Button, MenuItem } from "@material-ui/core";
import clsx from 'clsx';

import styles from './AddToList.module.scss';

export const AddtoList = () => {
    const [data, setData] = useState({ item: '', urgency: '' });

    const handleSubmit = () => {
        console.log('tetet')
    }

    const handleItemChange = (e) => {
        setData({ ...data, item: e.target.value })
    }

    const handleUrgencyChange = (e) => {
        setData({ ...data, urgency: e.target.value })
    }

    return (
        <form className={styles.wrapper} onSubmit={handleSubmit}>
            <TextField className={clsx(styles.input, styles['input-item'])} label="Item to buy" value={data.item} onChange={handleItemChange} />
            
            <TextField className={clsx(styles.input, styles['input-urgency'])} label="Urgency" value={data.urgency} select onChange={handleUrgencyChange}>
                <MenuItem value="Hight">High</MenuItem>
                <MenuItem value="Mid">Mid</MenuItem>
                <MenuItem value="Normal">Normal</MenuItem>
            </TextField>

            <Button className={styles.button} type="submit" variant="contained" color="primary">Add</Button>
        </form>
    )
}
