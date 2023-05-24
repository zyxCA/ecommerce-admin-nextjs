const { Schema, model, models, mongoose } = require("mongoose");

const ProductSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  images: [String],
  category: { type: mongoose.Types.ObjectId, ref: "Category" },
  properties: { type: Object },
});

export const Product = models.Product || model("Product", ProductSchema);
