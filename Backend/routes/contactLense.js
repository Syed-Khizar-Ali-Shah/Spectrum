const express = require('express');
const router = express.Router();
const contactLenseController = require('../controllers/contactLenseController');

// Create a new contact lens entry
router.post('/:patientID', contactLenseController.createContactLense);

// Get a list of all contact lens entries
router.get('/', contactLenseController.getAllContactLenses);

// Get a single contact lens entry by ID
router.get('/:patientID', contactLenseController.getContactLenseById);

// Update a contact lens entry by ID
router.put('/:id', contactLenseController.updateContactLense);

// Delete a contact lens entry by ID
router.delete('/:id', contactLenseController.deleteContactLense);

module.exports = router;
