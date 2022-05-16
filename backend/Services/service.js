const service = () => {

    const database = [
        {
            id: 1,
            website: "test",
            first_name: "Melina",
            email: "melinatest@email.com",
            phone_number: "+543456789",
            hosting: false
        },
    ];

    const getAll = async () => {

        let contacts = await database.map(contact => {
            return contact
        });
        return contacts;

    }

    const createContact = async ({ id, website, first_name, email, phone_number, hosting }) => {

        let newContact = await database.push({
            id: id,
            website: website,
            first_name: first_name,
            email: email,
            phone_number: phone_number,
            hosting: hosting
        });
        return newContact;

    }

    return {
        createContact,
        getAll,
    }

}

module.exports = { service };