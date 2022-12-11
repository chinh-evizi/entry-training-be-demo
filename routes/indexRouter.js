const express = require("express");
const router = express.Router();
const { getCompanies } = require("../controllers/companyController");
const {
  createCompanyService,
  getAllCompaniesService,
} = require("../models/services/companyServices");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* COMPANIES. */
router.get("/companies", getCompanies);
router.delete("/companies/delete/:id", getCompanies);

module.exports = router;
