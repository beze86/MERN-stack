import React, { useEffect, useState, createRef } from 'react';

import { DataTable } from './Table/Table';
import Modal from '@material-ui/core/Modal';
import { ModalBody } from './ModalBody/ModalBody';
import axios from 'axios';


export const Users = () => {


    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [userRow, setUserRow] = useState({});
    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3003/users')
            .then(({ data }) => {
                const userData = data.map(({ _id, name, color }) => {
                    return {
                        id: _id,
                        name: name,
                        color: color
                    }
                })
                setData(userData)
            })
            .catch((err) => {
                throw err;
            })
    }, [])

    useEffect(() => {
        if (window.location.href.indexOf('?rank=admin') !== -1) {
            setAdmin(true)
        }
    }, [])

    const handleOpen = (e) => {
        if (!admin) {
            return
        }
        setUserRow(e.row)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const ref = createRef();

    const handleSubmit = (userData) => {
        const index = data.findIndex((user) => {
            return user.id === userData.id
        })
        const updatedData = [...data];
        updatedData[index] = userData;
        setData(updatedData)
        setOpen(false)
    }

    return (
        <div className="">

            { data.length > 0 ?
                <DataTable data={data} openModal={handleOpen} />
                : 'loading...'}
            <Modal
                open={open}
                onClose={handleClose}>
                <div className="">
                    <ModalBody user={userRow} ref={ref} closeModal={handleClose} onSubmitUpdateUser={handleSubmit} />
                </div>
            </Modal>
        </div>
    )
}
