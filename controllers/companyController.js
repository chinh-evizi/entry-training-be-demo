const Company = require("../models/scheme/Company");
const {
  getAllCompaniesService,
  createCompanyService,
} = require("../models/services/companyServices");

const getCompanies = async (req, res, next) => {
  try {
    const { selector } = req.body;
    const { companies } = await getAllCompaniesService(selector);
    res.render("companies/companies", {
      title: "Companyyyyy",
      companies,
      delete: () => console.log("123123")
    });
  } catch (error) {
    console.log("error:", error);
    res.status(400).send(error);
  }
};

const createCompany = async (req, res, next) => {
  try {
    const { newCompany } = await createCompanyService(req.body);
    res.render("companies/companies", { title: "Company", newCompany });
  } catch (error) {
    console.log("error:", error);
    res.status(400).send(error);
  }
};

const deleteCompanyById = async (req, res, next) => {
  try {
    const { deleteCompany } = await deleteCompanyByIdService(req.params.id);
    res.render("companies/companies", { title: "Company", deleteCompany });
  } catch (error) {
    console.log("error:", error);
    res.status(400).send(error);
  }
};

module.exports = {
  getCompanies,
  createCompany,
  deleteCompanyById,
};
