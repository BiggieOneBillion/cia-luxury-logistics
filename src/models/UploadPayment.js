import mongoose from "mongoose";

const uploadPaymentReceiptSchema = new mongoose.Schema({
  filename: String,
  contentType: String,
  size: Number,
  uploadDate: Date,
});

// Define the schema for the file chunks (chunks collection)
const chunkSchema = new Schema({
  files_id: Schema.Types.ObjectId,
  n: Number,
  data: Buffer,
});

const UserOrderPayment =
  mongoose.models.User_order_payment ||
  mongoose.model("User_order_payment", uploadPaymentReceiptSchema);

const Chunk = mongoose.model("Chunk", chunkSchema);

// export default UserOrder;

module.exports = { UserOrderPayment, Chunk };
