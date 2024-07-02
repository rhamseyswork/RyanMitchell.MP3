// productModel.js (assuming Mongoose as ORM)
import mongoose from 'mongoose';

const linksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  img: {
    type: String, // Assuming img is a URL to an image
    required: true,
  },
});

const Links = mongoose.model('Links', linksSchema);

export default Links;
