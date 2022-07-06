const express = require('express');
const Users = require('../controllers/UserController');

var router = express.Router();

router.get('/:Token', Users.get);
router.post('/signup', Users.signup);
router.post('/signin', Users.signin);

module.exports = router;