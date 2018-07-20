import * as mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  name: String,
  price: Number,
  imageURL: String,
});

const articleModel = mongoose.model('article', articleSchema);

export default articleModel;
