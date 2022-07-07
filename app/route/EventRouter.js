const express = require('express');
const Events = require('../controllers/EventController');

var router = express.Router();

router.post('/add', Events.add);
router.post('/delete', Events.delete);
router.get('/showAll', Events.showAll);
router.get('/find:nome', Events.findIt);

module.exports = router;