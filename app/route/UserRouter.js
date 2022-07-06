const express = require('express');
const Users = require('../controllers/UserController');

router.get('/:Token', Users.get);
router.post('/signup', Users.signup);
router.post('/signin', Users.signin);

export default router;