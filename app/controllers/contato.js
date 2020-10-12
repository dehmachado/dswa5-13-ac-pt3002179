var ID_CONTATO_INC = 3;

module.exports = function (app) {
    var Contato = app.models.contato;
    var controller = {};
    controller.listaContatos = function (req, res) {
        Contato.find().exec().then(function (contatos) {
                res.json(contatos);
            },
            function (erro) {
                console.log(erro);
                res.status(500).json(erro);
            });
    };
    controller.obtemContato = function (req, res) {
        var _id = req.params.id;
        Contato.findById(_id).exec().then(function (contato) {
                if (!contato) throw new Error("Contato não encontrado");
                res.json(contato);
            },
            function (error) {
                console.log(error);
                res.status(404).json(error);
            });
    };
    controller.removeContato = function (req, res) {
        var _id = req.params.id;
        Contato.deleteOne({
            "_id": _id
        }).exec().then(function () {
                res.end();
            },
            function (error) {
                return console.error(error);
            });
    };

    controller.salvaContato = function (req, res) {
        var _id = req.params.id;
        if (_id) {
            Contato.findByIdAndUpdate(_id, res.body).exec().then(function (contato) {
                    res.json(contato);
                },
                function (error) {
                    console.log(erro);
                    res.status(500).json(erro);
                });
        } else {
            Contato.create(req.body).then(function (contato) {
                res.status(201).json(contato);
            }, 
            function (error) {
                console.log(erro);
                res.status(500).json(erro);
            });
        }
    };

    return controller;
};