import express from 'express';
import librasController from '../controllers/librasController.js';

const router = express.Router();

router.get('/', librasController.traduzirLibras);
router.get('/educacional', librasController.frasesEducacionais);

export default router;
