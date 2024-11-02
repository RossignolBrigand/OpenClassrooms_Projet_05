const Logement = require('../models/Logement.model');

exports.getLogements = async (req, res) => {
    try {
        const logementData = await Logement.find();
        res.json(logementData);
    }
    catch (error) {
        res.status(500).json({ error });
    }
}