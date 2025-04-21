import express from 'express';
import librasRoute from './routes/libras.route.js';
import audioRoute from './routes/audio.route.js';
import acessibilidadeRoute from './routes/acessibilidade.route.js';

const app = express();

// Rotas principais
app.use('/traduz', librasRoute);
app.use('/audios', audioRoute);
app.use('/botao-acessivel', acessibilidadeRoute);

// Rota raiz
app.get('/', (req, res) => {
    res.send('API Barreira Zero está online!');
});

export default app;
