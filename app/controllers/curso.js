var ID_CURSO_INC = 4;

module.exports = function(app) {
    var Curso = app.models.curso;
    var controller = {};

    controller.listaCursos = function (req, res) {
        Curso.find().exec().then(function (cursos) {
                res.json(cursos);
            },
            function (erro) {
                console.log(erro);
                res.status(500).json(erro);
            });
    };
    controller.obtemCurso = function (req, res) {
        var _id = req.params.id;
        Curso.findById(_id).exec().then(function (curso) {
                if (!curso) throw new Error("Curso não encontrado");
                res.json(curso);
            },
            function (error) {
                console.log(error);
                res.status(404).json(error);
            });
    };
    controller.removeCurso = function (req, res) {
        var _id = req.params.id;
        Curso.deleteOne({
            "_id": _id
        }).exec().then(function () {
                res.end();
            },
            function (error) {
                return console.error(error);
            });
    };

    controller.salvaCurso = function (req, res) {
        var _id = req.params.id;
        if (_id) {
            Curso.findByIdAndUpdate(_id, res.body).exec().then(function (curso) {
                    res.json(curso);
                },
                function (error) {
                    console.log(erro);
                    res.status(500).json(erro);
                });
        } else {
            Curso.create(req.body).then(function (curso) {
                res.status(201).json(curso);
            }, 
            function (error) {
                console.log(erro);
                res.status(500).json(erro);
            });
        }
    };

    return controller;
};