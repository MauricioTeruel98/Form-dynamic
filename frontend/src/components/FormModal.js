import React from 'react'
import { useState } from 'react';
import Form from './Form';
import Modal from './Modal';

export default function FormModal() {


    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='container'>

            <div className='button-wrapper-styles'>

                <h1 className='title'>Get a professional website for free and jumpstart your business.</h1>

                <div className='content'>
                    <button onClick={() => setIsOpen(true)} className='btn btn-light'>Apply now</button>
                </div>

                <Modal open={isOpen}>
                    <Form onClose={() => setIsOpen(false)}></Form>
                </Modal>

            </div>

            <div className='other-content-styles'></div>
        </div>
    )
}
