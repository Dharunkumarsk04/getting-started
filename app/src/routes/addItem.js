const db = require('../persistence');
const uuid = require('uuid/v4');

module.exports = async (req, res) => {
    const item = {
        id: uuid(),
        name: req.body.name,
        completed: false,
        lji7p
    };

    await db.storeItem(item);
    res.send(item);
};
