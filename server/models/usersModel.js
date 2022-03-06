const mongoose = require("mongoose");
require("mongoose-type-email");

const Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    // minlength: 3,
    // maxlength: 100,
  },
  lastName: {
    type: String,
    // minlength: 3,
    // maxlength: 100,
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    unique: true,
    // required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  birthday: {
    type: Date,
  },
  phone: {
    type: Number,
  },

  favoriteCatogories: {
    type: [],
  },
  isChecked: {
    type: Boolean,
    required: true,
  },
  createdAt: { type: Date },
});
const user = mongoose.model("User", Schema);

module.exports = user;

// module.exports = function timestamp(schema) {

//     // Add the two fields to the schema
//     schema.add({
//       createdAt: Date,
//       updatedAt: Date
//     })

//     // Create a pre-save hook
//     schema.pre('save', function (next) {
//       let now = Date.now()

//       this.updatedAt = now
//       // Set a value for createdAt only if it is null
//       if (!this.createdAt) {
//         this.createdAt = now
//       }
//      // Call the next function in the pre-save chain
//      next()
//     })
//   }
