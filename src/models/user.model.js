import mongoose from "mongoose";
import generateId from "../utils/nanoid.js";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  nameTag: {type: String, required:true},
  email: {type: String, required:true, unique:true},
  password: {
    type: String, 
    required: true,
  },
  publicId: {type: String, unique: true}
});

userSchema.pre("save", async function (next) {
  if (!this.publicId) {
    this.publicId = await generateId();
  }
  next();

})

export default mongoose.model("user", userSchema)