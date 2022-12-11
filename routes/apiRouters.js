const express = require("express");
const router = express.Router();
const {
  getAllCompaniesService,
  createCompanyService,
  deleteCompanyByIdService,
} = require("../models/services/companyServices");

// const JSON_convert = (req, res, next, service) => {
//   res.json(service);
// };

const initAPIRouter = (app) => {

  // COMPANIES
  router.get("/companies", async (req, res) => {
    const data = await getAllCompaniesService(req.selector);
    res.json(data);
  });
  router.post("/companies/create", async (req, res) => {
    const data = await createCompanyService(req.body);
    res.json(data);
  });
  router.delete("/companies/delete/:id", async (req, res) => {
    const data = await deleteCompanyByIdService(req.params.id);
    res.json(data);
  });

  return app.use("/api/v1", router);
};

module.exports = initAPIRouter;
