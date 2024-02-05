const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please Enter product Name"],
    trim: true,
  },
  description: {
    type: String,
    require: [true, "please Enter product Description"],
  },
  price: {
    type: Number,
    require: [true, "please Enter product Price"],
    maxLength: [8, "price cannot exceed 8 characters"],
  },
  rating: { type: Number, default: 0 },
  images: [
    {
      public_id: {
        type: String,
        require: true,
      },
      url: {
        type: String,
        require: true,
      },
    },
  ],
  category: {
    type: String,
    require: [true, "please enter Product Category"],
  },
  stock: {
    type: Number,
    require: [true, "please enter product stock"],
    maxLength: [4, "stock cannot exceed 4 character"],
    default: 1,
  },
  reviews: [
    {
      name: {
        type: String,
        require: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Product", productSchema);
