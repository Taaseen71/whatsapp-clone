const express = require('express');
const mongoose = require('mongoose');
const Messages = require('./db.js');


//app config
const app = express();
const PORT = 3001;
app.listen(PORT, () => console.log(`Listening to port: ${PORT}`));


const Pusher = require('pusher');

let pusher = new Pusher({
    appId: '1069387',
    key: '446a5868e105ded7d86d',
    secret: 'ca30799e8e6924898b22',
    cluster: 'us2',
    encrypted: true
});

//middleWare
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});



//db config
const Password = "DDuqBi0GXoq2LCD1";
const dbName = "whatsappDB";
const mongoDBserver = `mongodb+srv://taaseen71:${Password}@cluster0.pepi4.mongodb.net/test`

const connection_url = `mongodb+srv://taaseen71:${Password}@cluster0.pepi4.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.once('open', () => {
    console.log('DB connected')

    const msgCollection = db.collection('messagecontents');
    const changeStream = msgCollection.watch();

    // console.log(changeStream);
    changeStream.on('change', (change) => {
        console.log("Changing", change);


        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted',
                {
                    name: messageDetails.name,
                    message: messageDetails.message
                }
            )
        } else {
            console.log('Error triggering Pusher');
        }

    })

})



app.get('/', (req, res) => {
    res.send("hello world")
})

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data);
        }
    })
})



app.post('/message', (req, res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);
        }
    })
})