var mongooose = require('mongoose');
module.exports = function () {
    var schema = mongooose.Schema({
        curso: {
            type: String,
            required: true
        },
        coordenador: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        }
    });
    return mongooose.model('Curso',schema);
}