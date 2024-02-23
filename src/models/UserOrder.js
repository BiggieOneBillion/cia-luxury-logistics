import mongoose from "mongoose";
import { boolean } from "zod";

const userOrderSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pickupLocation: {
    type: String,
    required: true,
  },
  dropoffLocation: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  carsSelected: {
    type: [String],
    required: true,
  },
  paymentStatus: {
    type: Boolean,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

const UserOrder =
  mongoose.models.User_order || mongoose.model("User_order", userOrderSchema);

export default UserOrder;
