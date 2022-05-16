import { useState } from "react";

const Form = ({ onClose }) => {

    const [contact, setContact] = useState({
        id: '',
        website: '',
        first_name: '',
        email: '',
        phone_number: '',
        hosting: ''
    });

    let { id, website, first_name, email, phone_number, hosting } = contact;

    const handleChange = e => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {

        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contact)
        }
        fetch('http://localhost:9000/create', requestInit);

    }

    const handleSubmitIncomplete = (e) => {
        e.preventDefault();

        if (id !== '' || website !== '' || first_name !== '' || email !== '' || phone_number !== '' || hosting !== '') {
            const requestInit = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contact)
            }
            fetch('http://localhost:9000/create', requestInit);
        }

        onClose()

    }


    return (

        <div className='container-sm'>
            <div>
                <button className="btn btn-danger btn-close" onClick={handleSubmitIncomplete}></button>
            </div>
            <form onSubmit={handleSubmit}>
                <h1 className="title-modal">Contact Form</h1>
                <div className="slider-container">

                    <div className="right-slide">
                        <div className='mb-3'>
                            <label htmlFor='website' className='form-label'>1 - Describe the website you want to build.</label>
                            <input value={website} name='website' onChange={handleChange} type='text' id='website' className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='first_name' className='form-label'>2 - What is your first name? </label>
                            <input value={first_name} name='first_name' onChange={handleChange} type='text' id='first_name' className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>3 - What is your email?</label>
                            <input value={email} name='email' onChange={handleChange} type='text' id='email' className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='phone_number' className='form-label'>4 - Phone number</label>
                            <input value={phone_number} name='phone_number' onChange={handleChange} type='tel' id='phone_number' className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='hosting' className='form-label'>5 - Do you have web hosting already?</label>
                            <select value={hosting} name='hosting' onChange={handleChange} type='text' id='hosting' className='form-control'>
                                <option value={''} defaultValue></option>
                                <option value={true}>Yes, i have web hosting</option>
                                <option value={false}>No, i don't</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <button type='submit' className='btn btn-primary' >Send</button>
                        </div>
                    </div>

                </div>
            </form>
        </div>

    )

}

export default Form;