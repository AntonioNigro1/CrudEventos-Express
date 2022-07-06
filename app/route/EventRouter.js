const express = require('express');
const Event = require('../controllers/EventController.js');

router.post('/add', Event.add);
router.post('/delete', Event.delete);
router.get('/showAll', Event.showAll);
router.get('/find', Event.findIt);

export default router;