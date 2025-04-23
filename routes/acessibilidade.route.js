import express from 'express';
import acessibilidadeController from '../controllers/acessibilidadeController.js';
const router = express.Router();
// Retorna um botão HTML com atributos de acessibilidade
router.get('/', acessibilidadeController.gerarBotaoAcessivel);
export default router;