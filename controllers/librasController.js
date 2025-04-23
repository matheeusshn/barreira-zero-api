// Traduz texto fornecido para LIBRAS ou retorna frases educacionais
class librasController {
    traduzirLibras(req, res) {
        const texto = req.query.texto;
        if (!texto) {
            return res.status(400).json({ erro: 'Texto não fornecido' });
        }
        res.json({
            texto_original: texto,
            descricao_libras: `Tradução para LIBRAS da frase: "${texto}"`,
            link_video: `https://mock.barreirazero.com/libras/${encodeURIComponent(texto)}.mp4`
        });
    }

    frasesEducacionais(req, res) {
        res.json({
            frases: [
                { portugues: "Bom dia, turma!", libras: "https://mock.barreirazero.com/libras/bom-dia.mp4" },
                { portugues: "Vamos aprender matemática.", libras: "https://mock.barreirazero.com/libras/matematica.mp4" }
            ]
        });
    }
}
export default new librasController();