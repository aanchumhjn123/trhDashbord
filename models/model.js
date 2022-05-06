const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  fatherFirstName: { type: String, required: true },
  fatherLastName: { type: String, required: true },
  motherName: { type: String, required: true },
  contactNo: { type: Number, required: true },
  emergencyContactNo: { type: Number, required: true },
  marriedStatus: { type: String, required: true },
  localAddress: { type: String, required: true },
  cityOrTown: { type: String, required: true },
  state: { type: String, required: true },
  pinCode: { type: Number, required: true },
  permanentAddress: { type: String, required: true },
  email: { type: String, required: true, trim: true },
  aadharNo: { type: Number, required: true },
  anyOtherIdentity: { type: String, required: true },
  role: { type: String, required: true },
  joiningDate: { type: String, required: true },
  workExperience: { type: String, required: true },
  higherQualification: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  profilePicture: { type: String, required:true },
  createdAt: { type: Date, default: Date.now }
});
employeeSchema.pre("save", (next) => {
  now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

const Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;
