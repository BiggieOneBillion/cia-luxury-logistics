import mongoose from "mongoose";
import { boolean } from "zod";

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const messageModel =
  mongoose.models.message || mongoose.model("message", contactSchema);

export default messageModel;
