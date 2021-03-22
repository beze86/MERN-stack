import React, { useEffect, useState, createRef } from 'react';

import { DataTable } from '../../reusables/Table/Table';
import Modal from '@material-ui/core/Modal';
import { ModalBody } from './ModalBody/ModalBody';
import axios from 'axios';


export const Users = () => {
    

    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [userModify, setUserModify] = useState({});

    useEffect(() => {
        axios.get('http://localhost:3003/users')
        .then(({data}) => {
            const userData = data.map(({_id, name, color}) => {
                return {
                    id: _id,
                    name: name,
                    color: color
                }
            })
            setData(userData)
        })    
    }, [])

    const handleOpen = (e) => {
        setUserModify(e.row)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const ref = createRef();

    return (
        <div className="">
            <DataTable data={data} openModal={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}>
                <div className="">
                    <ModalBody user={userModify} ref={ref} closeModal={handleClose}/>
                </div>
            </Modal>
        </div>
    )
}
