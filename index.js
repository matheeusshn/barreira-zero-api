import express from 'express';
import librasRoute from './routes/libras.route.js';
import audioRoute from './routes/audio.route.js';
import acessibilidadeRoute from './routes/acessibilidade.route.js';

const app = express();

// Rota principal de status
app.get('/', (req, res) => {
    res.send('API Barreira Zero está online!');
});

// Definindo as rotas da aplicação
app.use('/traduz', librasRoute);
app.use('/audios', audioRoute);
app.use('/botao-acessivel', acessibilidadeRoute);

export default app;