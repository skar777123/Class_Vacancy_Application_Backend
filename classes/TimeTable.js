import mongoose,{ Schema } from "mongoose";

const timetable = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    faculty: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      ref: "Class",
      required: true,
    },
    student: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Timetable = mongoose.model("Timetable", timetable);
export default Timetable;
