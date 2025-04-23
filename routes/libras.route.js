import express from 'express';
import librasController from '../controllers/librasController.js';
const router = express.Router();
// Traduz texto simples para LIBRAS (simulado)
router.get('/', librasController.traduzirLibras);
// Retorna frases educacionais traduzidas para LIBRAS
router.get('/educacional', librasController.frasesEducacionais);
export default router;