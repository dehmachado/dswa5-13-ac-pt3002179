var mongooose = require('mongoose');
module.exports = function () {
    var schema = mongooose.Schema({
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        }
    });
    return mongooose.model('Contato',schema);
}