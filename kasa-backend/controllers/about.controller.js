const About = require('../models/About.model');

exports.getAbout = async (req, res, next) => {
    try {
        const aboutData = await About.find();
        res.json(aboutData);
    }
    catch (error) {
        res.status(500).json({ error });
    }
}