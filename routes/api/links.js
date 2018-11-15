var router = require('express').Router();
var linkCtrl = require('../../controllers/link');

router.get('/:id?', linkCtrl.find);
router.post('/', linkCtrl.create)
router.delete('/:id', linkCtrl.delete);
router.put('/:id', linkCtrl.update);

module.exports = router;
