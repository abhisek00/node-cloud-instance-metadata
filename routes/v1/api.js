const router = require('express').Router();
const metadata = require('../../controllers/metadata.js');

router.get('/metadata/:id', metadata.get);
router.get('/metadata', metadata.getAll);
router.get('/dynamicdata/:id', metadata.dynamicdata);
router.get('/dynamicdata', metadata.dynamicdata);


module.exports = router;