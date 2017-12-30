const express = require('express');
const mongoose = require('mongoose');

// 链接mongo 并使用employapp这个集合
const DB_URL = 'mongodb://localhost:27017/employapp';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', () => {
    console.log('mongo connect success');
});

const User = mongoose.model('user', new mongoose.Schema({
    username:{type:String, require:true},
    age:{type:Number, require:true}
}));

// User.create({
//     username: 'xiaohua',
//     age: 18
// }, (err, doc) => {
//     if(!err) {
//         console.log(doc);
//     } else {
//         console.error(err);
//     }
// });

// User.update({'username': 'xiaohua'}, {$set: {age: 10}}, (err, doc) => {
//     console.log(doc);
// });

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>');
});

app.get('/data', (req, res) => {
    User.find({}, (err, doc) => {
        if(!err) {
            res.json(doc);
        } else {
            res.send('error');
        }
    });
});

app.listen(9093, () => {
    console.log('Node app start at port:9093');
});