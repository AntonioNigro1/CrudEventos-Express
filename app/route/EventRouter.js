const express = require('express');
const Event = require('../controllers/EventController');

var router = express.Router();

router.post('/add', Event.add);
router.post('/delete', Event.delete);
router.get('/showAll', Event.showAll);
router.get('/find:nome', Event.findIt);

module.exports = router;