const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const categorieSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide a category name"],
      unique: true,
      lowerCase: true,
    },
    firstsublinks: {
      type: Array,
    },
  },
  {
    timesTamps: true,
  }
);

const Categorie = mongoose.model("Categorie", categorieSchema);

module.exports = Categorie;
