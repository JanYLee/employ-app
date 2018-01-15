const express = require('express');
const Router = express.Router();
const utils = require('utility');

const model = require('./model');
const User = model.getModel('user');

Router.get('/list', (req, res) => {
  // User.remove({}, (err, doc) => {});
  User.find({}, (err, doc) => {
    return res.json(doc);
  })
});

Router.post('/login', (req, res) => {
  const {user, pwd} = req.body;
  User.findOne({user, pwd: md5Pwd(pwd)}, {pwd: 0}, (err, doc) => {
    if(!doc) {
      return res.json({code: 1, msg: '用户名或者密码错误'});
    }
    return res.json({code: 0, data: doc});
  });
});

Router.post('/register', (req, res) => {
  const {user, pwd, type} = req.body;
  User.findOne({user}, (err, doc) => {
    if(doc) {
      return res.json({code: 1, msg: '用户名重复'});
    }
    User.create({user, type, pwd: md5Pwd(pwd)}, (err, doc) => {
      if(err) {
        return res.json({code: 1, msg: '后端出错'});
      }
      return res.json({code: 0});
    })
  })
});

Router.get('/info', (req, res) => {
  return res.json({code: 0});
});

function md5Pwd(pwd) {
  const salt = 'ddl';
  return utils.md5(utils.md5(pwd + salt));
}

module.exports = Router;