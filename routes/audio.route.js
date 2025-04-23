import express from 'express';
import audioController from '../controllers/audioController.js';
const router = express.Router();
// Transcreve um áudio simulado a partir de uma URL
router.get('/descricao', audioController.transcreverAudio);
export default router;