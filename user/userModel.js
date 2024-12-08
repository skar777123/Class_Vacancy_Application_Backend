import mongoose,{ Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    studentId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      default:"student"
    },
    course: {
      type: String,
      required: true,
    },
    academicYear: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
