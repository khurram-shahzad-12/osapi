const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/getcategorylist', controller.getcategorylist);

router.get('/getallcategoryItems', controller.getallcategoryItems);

router.get('/getallItems', controller.getallItems);

module.exports = router;