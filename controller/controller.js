const Employee = require("../models/model");
//var url = "https://trh-family.herokuapp.com/";


 var url = "http://localhost:8081/";

exports.addEmployee = async (req, res, next) => {
  try {
    const newEmployee = new Employee({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      fatherFirstName: req.body.fatherFirstName,
      fatherLastName: req.body.fatherLastName,
      motherName: req.body.motherName,
      contactNo: req.body.contactNo,
      emergencyContactNo: req.body.emergencyContactNo,
      marriedStatus: req.body.marriedStatus,
      localAddress: req.body.localAddress,
      cityOrTown: req.body.cityOrTown,
      state: req.body.state,
      pinCode: req.body.pinCode,
      permanentAddress: req.body.permanentAddress,
      email: req.body.email,
      aadharNo: req.body.aadharNo,
      anyOtherIdentity: req.body.anyOtherIdentity,
      role: req.body.role,
      joiningDate: req.body.joiningDate,
      workExperience: req.body.workExperience,
      higherQualification: req.body.higherQualification,
      bloodGroup: req.body.bloodGroup,
      profilePicture: `${url}${req.file.path}`,
    });
    newEmployee.save();
    res.json({
      data: newEmployee,
      message: "You have register successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (email != "admin@therapidhire.com" && password != "#Equifax2014")
      return next(new Error("Email does not exist"));

    res.status(200).json({
      data: { email: email, password: password },
      message: " login successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.getEmployees = async (req, res, next) => {
  const employees = await Employee.find({});
  res.status(200).json({
    data: employees,
    message: " All Users found",
  });
};

exports.getEmployee = async (req, res, next) => {
  try {
    const EmployeeId = req.params.EmployeeId;
    const employee = await Employee.findById(EmployeeId);
    if (!employee) return next(new Error("Employee does not exist"));
    res.status(200).json({
      data: employee,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateEmployee = async (req, res, next) => {
  try {
    const EmployeeId = req.params.EmployeeId;
    await Employee.findByIdAndUpdate(EmployeeId, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      fatherFirstName: req.body.fatherFirstName,
      fatherLastName: req.body.fatherLastName,
      motherName: req.body.motherName,
      contactNo: req.body.contactNo,
      emergencyContactNo: req.body.emergencyContactNo,
      marriedStatus: req.body.marriedStatus,
      localAddress: req.body.localAddress,
      cityOrTown: req.body.cityOrTown,
      state: req.body.state,
      pinCode: req.body.pinCode,
      permanentAddress: req.body.permanentAddress,
      email: req.body.email,
      aadharNo: req.body.aadharNo,
      anyOtherIdentity: req.body.anyOtherIdentity,
      role: req.body.role,
      joiningDate: req.body.joiningDate,
      workExperience: req.body.workExperience,
      higherQualification: req.body.higherQualification,
      bloodGroup: req.body.bloodGroup,
      profilePicture: `${url}${req.file.path}`,
    });
    const employee = await Employee.findById(EmployeeId);
    res.status(200).json({
      data: employee,
      message: "Updated",
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteEmployee = async (req, res, next) => {
  try {
    const EmployeeId = req.params.EmployeeId;
    await Employee.findByIdAndDelete(EmployeeId);
    res.status(200).json({
      data: null,
      message: "User has been deleted",
    });
  } catch (error) {
    next(error);
  }
};


