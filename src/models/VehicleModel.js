import mongoose from "mongoose";


const vehicleSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: true,
  },
  modelName: {
    type: String,
    required: true,
  },
  seatCapacity: {
    type: Number,
    required: true,
  },
  fuelCapacity: {
    type: Number,
    required: true,
  },
  driveTrain: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const VehicleInfo =  mongoose.models.Vehicle_Info || mongoose.model("Vehicle_Info", vehicleSchema);

export default VehicleInfo;