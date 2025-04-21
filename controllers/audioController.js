class audioController {
    transcreverAudio(req, res) {
        const audioUrl = req.query.audio_url;
        if (!audioUrl) {
            return res.status(400).json({ erro: 'URL do áudio não fornecida' });
        }

        res.json({
            audio_url: audioUrl,
            transcricao: "Som de passos seguido de uma porta abrindo."
        });
    }
}

export default new audioController();
