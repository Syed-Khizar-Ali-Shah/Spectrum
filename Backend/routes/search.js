const express = require("express");
const Patient = require("../models/Patient");
const router = express.Router();

router.get('/', async (req, res) => {
    const { value } = req.query;

    console.log("v", value);
  
    try {
        // Use a case-insensitive regex to search for forename
        const result = await Patient.find({ forename: { $regex: new RegExp(value, 'i') } });

        console.log("r", result);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
