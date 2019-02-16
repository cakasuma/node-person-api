let PersonModel = require('../models/person.model')
let express = require('express')
let router = express.Router()


router.post('/person', (req, res) => {
    if (!req.body) {
        res.status(400).send('Request body is missing')
    }

    let model = new PersonModel(req.body)
    model.save()
        .then(doc => {
            if (!doc || doc.length === 0) res.status(500).send(doc)

            res.status(201).send(doc)
        })
        .catch(err => res.status(500).json(err))
})

router.get('/person', (req, res) => {
    if (!req.query.length) {
        PersonModel.find().then(doc => res.json(doc))
            .catch(err => res.status(500).json(err))
    } else {
        PersonModel.findOne({
            email: req.query.email,
        }).then(doc => res.json(doc))
            .catch(err => res.status(500).json(err))
    }
})

router.put('/person', (req, res) => {
    if (!req.query.email) res.status(400).send('Missing URL parameter email')

    PersonModel.findOneAndUpdate({
        email: req.query.email,
    }, req.body, {
        new: true,
    }).then(doc => res.json(doc))
      .catch(err => res.status(500).json(err))
})

router.delete('/person', (req, res) => {
    if (!req.query.email) res.status(400).send('Missing URL parameter email')

    PersonModel.findOneAndRemove({
        email: req.query.email,
    }).then(doc => res.json(doc))
      .catch(err => res.status(500).json(err))
})

module.exports = router