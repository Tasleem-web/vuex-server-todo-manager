const express = require('express');
const router = express.Router();
const { Contact } = require('../models/ContactUs');


router.post("/contactus", (req, res) => {
    const contact = new Contact(req.body)
    console.log(contact)
    contact.save((err, doc) => {
        console.log(doc)
        console.log(err)
        if (err) return res.json({ success: false, err });
        res.status(200).json({
            message: req.body.name + ' saved successfully.' + 'Thank you come again...',
            result: doc
        })
    });

});

router.get("/getContact", (req, res) => {
    Contact.find({})
        .then(result => {
            console.log(result)
            res.status(200).json({
                message: result
            })
        })
        .catch(err => {
            res.status(200).json({
                message: result
            })
        })
});

module.exports = router;

