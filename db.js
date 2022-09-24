

module.exports = function(app) {


    const MongoClient = require('mongodb').MongoClient
    MongoClient.connect(
    'mongodb+srv://////:////@cluster0.5wiz5vb.mongodb.net/////?retryWrites=true&w=majority',
    {useUnifiedTopology: true}
    ).then( (client) => {
        console.log('Connected to Mongo Database')

        const db = client.db('BlogAsia')
        app.locals.db = db
        app.locals.input = db.collection('Komentarz1')
        app.locals.input_two = db.collection('Komentarz2')
        app.locals.input_three = db.collection('Komentarz3')
        db.collection('Komentarz1').createIndex({"autor": 1},{'text':1}, {unique: true})
        db.collection('Komentarz2').createIndex({"autor": 1},{'text':1}, {unique: true})
        db.collection('Komentarz3').createIndex({"autor": 1},{'text':1}, {unique: true})

})

}
