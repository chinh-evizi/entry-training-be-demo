const { companyValidate } = require("../../validate/companyValidate");
const Company = require("../scheme/Company");

const defaultSelector = [{ $limit: 3 }]

const getAllCompaniesService = async (selector = defaultSelector) => {
  console.log("selector", selector);
  try {
    const data = await Company.aggregate(selector);
    return { companies: { data: data, error: null } };
  } catch (error) {
    return { companies: { data: null, error: error } };
  }
};

const createCompanyService = async (body) => {
  try {
    const { error } = companyValidate(body);
    if (error) return { newCompany: { data: null, error: error } };

    const checkCompanyNamelExist = await Company.findOne({
      companyName: body.companyName,
    });
    if (checkCompanyNamelExist)
      return { newCompany: { data: null, error: "Company Name is exist" } };

    let company = new Company({
      ...body,
    });

    const newCompany = await company.save();
    return { newCompany: { data: newCompany, error: null } }

  } catch (error) {
    console.log("error:", error);
    return { newCompany: { data: null, error: error } };
  }
};

const deleteCompanyByIdService = async (id) => {
  try {
    const data = await Company.findByIdAndDelete({_id: id});
    return { deleteCompany: { data: data, error: data ?? "Can not find item to delete" } };
  } catch (error) {
    console.log("error:", error);
    return { deleteCompany: { data: null, error: error } };
  }
}

module.exports = {
  getAllCompaniesService,
  createCompanyService,
  deleteCompanyByIdService
};
