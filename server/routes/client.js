const express = require('express');
const router = express.Router();

const clientController = require('../controllers/clientController')

router.get("/clients", clientController.getAll);
router.get("/clients/fields", clientController.getAllFields);

router.get('/', (req, res) => {res.send('hola mundo')})

module.exports = router;