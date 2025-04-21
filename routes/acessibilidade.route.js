import express from 'express';
import acessibilidadeController from '../controllers/acessibilidadeController.js';

const router = express.Router();

router.get('/', acessibilidadeController.gerarBotaoAcessivel);

export default router;
