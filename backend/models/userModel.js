import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // enforce unique emails
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
}, {
  timestamps: true
});

userSchema.pre('save', async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10); // ← hashes AGAIN
  }
  next();
});
const User = mongoose.model("User", userSchema);
export { User };