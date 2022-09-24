const express = require('express');
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(express.static('publick'))
app.use(express.static('scripts'))

require('./db')(app)





app.get('/', (req, res) => {
    res.render('index.ejs')
});


app.get('/paitings', async (req,res) => {

    const db  = req.app.locals.db
    const result = await  db.collection('Komentarz1')
        .find()
        .toArray()
    
        
    res.render  ('page2.ejs', {
        result:result
            
    })
    
    
})



app.get('/drawings',  async (req,res) => {

    const db  = req.app.locals.db
    const result = await  db.collection('Komentarz2')
        .find()
        .toArray()
    
        
    res.render  ('page3.ejs', {
        result:result
            
    })
    
    
})

app.get('/other', async (req,res) => {

    const db  = req.app.locals.db
    const result = await  db.collection('Komentarz3')
        .find()
        .toArray()
    
        
    res.render  ('page4.ejs', {
        result:result
            
    })
    
    
})





app.post('/add' ,(req,res)=>{

    const input = req.app.locals.input
    input
        .insertMany([{autor: req.body.autor ,text: req.body.text} ])
        .then((result)=>{
            if(result.insertedCount == 2) return res.json('Success')
        })
        .catch(()=>{
            return res.json(
                'fairesa'
            )
        })
})


app.post('/add_two' ,(req,res)=>{

    const input_two = req.app.locals.input_two
    input_two
        .insertMany([{autor: req.body.autor ,text: req.body.text} ])
        .then((result)=>{
            if(result.insertedCount == 2) return res.json('Success')
        })
        .catch(()=>{
            return res.json(
                'fairesa'
            )
        })
})


app.post('/add_three' ,(req,res)=>{

    const input_three = req.app.locals.input_three
    input_three
        .insertMany([{autor: req.body.autor ,text: req.body.text} ])
        .then((result)=>{
            if(result.insertedCount == 2) return res.json('Success')
        })
        .catch(()=>{
            return res.json(
                'fairesa'
            )
        })
})





app.listen(4000, () => {
    console.log(`Server started on port 4000`);
});