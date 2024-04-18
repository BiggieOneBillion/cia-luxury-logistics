import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const messageModel =
  mongoose.models.message || mongoose.model("message", contactSchema);

export default messageModel;