import React, { useEffect, useState } from 'react'

export default function List() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const getContacts = () => {
            fetch('http://localhost:9000/')
                .then(res => res.json())
                .then(res => setContacts(res))
        }
        getContacts()
    }, [])

    return (

        <div>
            <div className='container list'>
                <h1>Contacts List</h1>
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Website</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Hosting</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map(contact => (
                                    <tr key={contact.id}>
                                        <th>{contact.id}</th>
                                        <th>{contact.website}</th>
                                        <th>{contact.first_name}</th>
                                        <th>{contact.email}</th>
                                        <th>{contact.phone_number}</th>
                                        <th>{contact.hosting}</th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
