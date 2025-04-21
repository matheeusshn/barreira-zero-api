import express from 'express';
import audioController from '../controllers/audioController.js';

const router = express.Router();

router.get('/descricao', audioController.transcreverAudio);

export default router;
