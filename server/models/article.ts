import * as mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  name: String,
  price: Number,
  imageURL: String
});

const Article = mongoose.model('Article', articleSchema);

export default Article;
