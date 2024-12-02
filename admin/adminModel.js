import mongoose,{ Schema } from "mongoose";

const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["faculty", "cr"],
    required: true,
  },
  idno: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    default:"admin"
  },
});
const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
