var express = require('express');
var {MongoClient} = require('mongodb');
var cors = require('cors')
const client = new MongoClient("mongodb://localhost:27017", {useUnifiedTopology: true});
function connectToDb(){
    client.connect(function(err, c){
        console.log("Yay connected to mongodb")
    });
}
connectToDb()
var app = express();
app.use(cors({
    origin: '*'
}))
app.use(express.json())

app.post('/deltodel', (req, res) => {
    console.log(req.body);
    connectToDb()
    const db = client.db("MUNorg");
    db.collection('deltodel').insertOne(req.body, (err, data) => {
        if(err) return console.log(err);
        res.send(('saved to db: ' + data));
        console.log('saved to db');
    })
});
app.get('/alldtd', (req, res) => {
    const db = client.db("MUNorg");
    db.collection('deltodel').find({}).toArray(function (err, docs) {
        if (err) throw err
        else {
            res.send(JSON.stringify(docs));
        }
        client.close();
    });
})

app.post('/deltoeb', (req, res) => {
    console.log("THE REQQQQQQQQQQQQQQQQ : ", req.body);
    connectToDb()
    const db = client.db("MUNorg");
    db.collection('deltoeb').insertOne(req.body, (err, data) => {
        if(err) return console.log(err);
        res.send(('saved to db: ' + data));
    })
});
app.get('/alldte', (req, res) => {
    const db = client.db("MUNorg");
    db.collection('deltoeb').find({}).toArray(function (err, docs) {
        if (err) throw err
        else {
            res.send(JSON.stringify(docs));
        }
        client.close();
    });
})

app.post('/committeedetails', (req, res) => {
    console.log(req.body);
    connectToDb()
    const db = client.db("MUNorg");
    db.collection('committeedetails').insertOne(req.body, (err, data) => {
        if(err) return console.log(err);
        res.send(('saved to db: ' + data));
        console.log('saved to db');
    })
});
app.get('/committeedetails', (req, res) => {
    const db = client.db("MUNorg");
    db.collection('committeedetails').find({}).toArray(function (err, docs) {
        if (err) throw err
        else {
            res.send(JSON.stringify(docs));
        }
        client.close();
    });
})

app.post('/rollcall', (req, res) => {
    console.log(req.body);
    connectToDb()
    const db = client.db("MUNorg");
    db.collection('rollcall').insertOne(req.body, (err, data) => {
        if(err) return console.log(err);
        res.send(('saved to db: ' + data));
        console.log('saved to db');
    });
});
app.get('/rollcall', (req, res) => {
    const db = client.db("MUNorg");
    db.collection('rollcall').find({}).toArray(function (err, docs) {
        if (err) throw err
        else {
            res.send(JSON.stringify(docs));
        }
        client.close();
    });
})

app.post('/motions', (req, res) => {
    console.log(req.body);
    connectToDb()
    const db = client.db("MUNorg");
    db.collection('motions').insertOne(req.body, (err, data) => {
        if(err) return console.log(err);
        res.send(('saved to db: ' + data));
        console.log('saved to db');
    })
});
app.get('/motions', (req, res) => {
    const db = client.db("MUNorg");
    db.collection('motions').find({}).toArray(function (err, docs) {
        if (err) throw err
        else {
            res.send(JSON.stringify(docs));
        }
        client.close();
    });
})

app.listen(4000, function() {
    console.log('Server listening on port 4000')
});