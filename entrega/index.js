const express = require('express')
const porta = 3000;
const app = express();

const mulheresIncriveis = require('./mulheresIncriveis.json')

/** GET **/
app.get('/mulheresIncriveis', function (request, response) {
    response.json(mulheresIncriveis)
});

/**GET com ID **/
app.get('/mulheresIncriveis/:id', function (request, response) {
    const id = request.params.id;
    const mulherSelecionada = mulheresIncriveis.find(mulher => mulher.id == id);
    //console.log(mulherSelecionada)
    response.json(mulherSelecionada)

    /***** Outro modo de resolução também com o findIndex ******/
    //const mulherSelecionada = mulheresIncriveis.findIndex(mulher => mulher.id == id)
    //response.json(mulheresIncriveis[mulherSelecionada])//

});

app.listen(porta, function () {
    console.log(`O servidor está rodando na porta ${porta} e viva o empoderamento feminino`)
})