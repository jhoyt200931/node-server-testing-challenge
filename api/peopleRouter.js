const express = require('express');
const People = require('./peopleModel.js');
const router = express.Router();

router.post('/', async (req, res) => {
    const person = req.body;
    try {
        const id = await People.add(person);
        res.status(201).json(id);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'there was an error adding the person', err})
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params;
    try {
        const deleted = await People.del(id);
        res.status(200).json({message: 'This person has been deleted'})
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'There was an error deleting the person', err})
    }
})


module.exports = router;