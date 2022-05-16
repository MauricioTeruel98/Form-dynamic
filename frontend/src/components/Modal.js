import React from 'react'


export default function Modal({ open, children, onClose }) {

    if (!open) return null

    return (
        <div>
            <div className='overlay-styles'></div>
            <div className='modal-styles'>
                {children}
            </div>
        </div>
    )
}
