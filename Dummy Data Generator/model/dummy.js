import mongoose from "mongoose";
const { Schema, model } = mongoose
const dummySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  salary: {
    type: Number,
  },
  language: {
    type: String,
  },
  city: {
    type: String,
  },
  isManager:{
    type:Boolean,
  },
});

// 2. Compile it into a model
const Dummy = model('Dummy', dummySchema);

export default Dummy;
