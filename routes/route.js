const express = require("express");
const router = express.Router();
const userController = require("../controller/controller");
const multer = require("multer");
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var uploadFile = multer({ storage: storage }).single("file");

router.post("/addemployee", uploadFile, userController.addEmployee);
router.post("/login", userController.login);
router.get("/employee/:EmployeeId", userController.getEmployee);
router.get("/employees", userController.getEmployees);
router.put("/employee/:EmployeeId", uploadFile, userController.updateEmployee);
router.delete("/employee/:EmployeeId", userController.deleteEmployee);

module.exports = router;
