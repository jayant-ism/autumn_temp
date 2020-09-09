const express = require('express');

const router = express.Router();

const appRouteController = require('../controller/appRoutes');

router.get('/', appRouteController.index);

router.get('/contact-us', appRouteController.getContactUs);

router.post('/contact-us', appRouteController.postContactUs);

router.get('/services', appRouteController.services);

module.exports = router;
