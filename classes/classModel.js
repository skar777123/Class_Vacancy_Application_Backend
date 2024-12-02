import mongoose,{ Schema } from "mongoose";

const classSchema = new Schema(
  {
    classNo: {
      type: String,
      required: true,
    },
    faculty: {
      type: String,
      required: true,
    },
    occupied: {
      type: Boolean,
      default: false,
    },
    occupiedBy: {
      type: String,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    floor: {
      type: String,
    },
    building: {
      type: String,
    },
    category: {
      type: String,
      default: "classroom",
    },
  },
  {
    timestamps: true,
  }
);

const Class = mongoose.model("Class", classSchema);
export default Class;
