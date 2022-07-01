const express = require('express');

const postsApi= require("../../../controllers/api/v1/posts_api");

const router = express.Router();
const usersApi = require('../../../controllers/api/v1/users_api');

router.use('/posts', require('./posts'));

router.post('/users/create-session', usersApi.createSession);

module.exports = router;