const findDocuments = function (db, callback) {
    const collection = db.collection('contatos');
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Foram encontrados os seguintes docs");
        console.log(docs);
        callback(docs);
    });
}
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb+srv://dswa5:dswa5@cluster0.eadj1.azure.mongodb.net/dswa5?retryWrites=true&w=majority';
const dbName = 'ifsp';
MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (err, client) {
    assert.equal(null, err);
    console.log("Aluno: Debora Machado");
    console.log("Servidor Conectado!");

    const db = client.db(dbName);

    findDocuments(db, function () {
        client.close();
    });
});