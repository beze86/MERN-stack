import { useState } from 'react';
import { TextField, Button, MenuItem } from "@material-ui/core";

import styles from './AddToList.module.scss';

export const AddtoList = () => {
    const [data, setData] = useState({ item: '', urgency: '' });

    const handleSubmit = () => {
        console.log('tetet')
    }

    const handleItemChange = (e) => {
        setData({ ...data, item: e.target.value })
    }
    console.log(data)
    return (
        <form className={styles.wrapper} onSubmit={handleSubmit}>
            <TextField label="Item to buy" onChange={handleItemChange} />
            
            <TextField label="Urgency" value="Mid" select>
                <MenuItem value="Hight">High</MenuItem>
                <MenuItem value="Mid">Mid</MenuItem>
                <MenuItem value="Normal">Normal</MenuItem>
            </TextField>

            <Button type="submit" variant="contained" color="primary">Add</Button>
        </form>
    )
}
