const db = require('../data/db-config.js');

module.exports = {
    add,
    del
}

async function add(person) {
    try {
        const {id} = await db('people').insert(person)
    } catch (err) {
        throw err
    }
}

function del(id) {
    return db('people')
        .where('id', id)
        .del();
}