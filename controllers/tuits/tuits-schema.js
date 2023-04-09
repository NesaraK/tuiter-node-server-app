import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  avatar_img: String,
  handle: String,
  replies: Number,
  retuits: Number,
  time: String,
  userName: String

}, {collection: 'tuits'});
export default schema;