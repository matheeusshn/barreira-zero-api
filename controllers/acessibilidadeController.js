class acessibilidadeController {
    gerarBotaoAcessivel(req, res) {
        res.json({
            descricao: "Botão acessível com rótulo 'Enviar'",
            codigo_html: "<button aria-label='Enviar formulário' role='button'>Enviar</button>"
        });
    }
}

export default new acessibilidadeController();
