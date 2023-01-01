const express = require('express');
const router = express.Router();
const {
 getDrugs
} = require('../controllers/drugControllers');

router.route('/').get(getDrugs)


module.exports = router;