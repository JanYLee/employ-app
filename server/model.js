// 链接mongo 并使用employapp这个集合
const DB_URL = 'mongodb://localhost:27017/employapp';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', () => {
  console.log('mongo connect success');
});