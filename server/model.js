const mongoose = require('mongoose');
// 链接mongo 并使用employapp这个集合
const DB_URL = 'mongodb://localhost:27017/employapp';
mongoose.connect(DB_URL);

mongoose.connection.on('connected', () => {
  console.log('mongo connect success');
});

const models = {
  user: {
    'user': {type: String, require: true},
    'pwd': {type: String, require: true},
    'type': {type: String, require: true},

    //头像
    'avatar': {type: String},
    //个人简介
    'desc': {type: String},
    //职位名
    'title': {type: String},
    // 如果你是boss
    'company': {type: String},
    'money': {type: String}
  },
  chat: {

  }
};

for(let m in models){
  mongoose.model(m, new mongoose.Schema(models[m]));
}

module.exports = {
  getModel: function (name) {
    return mongoose.model(name);
  }
};