
module.exports = (app, service) => {

    app.get('/', (req, res) => {

        service.getAll()
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.status(500).json(err);
            });

    });

    app.post('/create', (req, res) => {

        var newContact = req.body;

        service.createContact(newContact)
            .then((result) => {
                res.json(result);
            }).catch((err) => {
                res.status(500).json(err);
            });

    })

}