const sendemailerr = require('../../helpers/email').emailerr;
const resp = require('../../helpers/responseHelpers');

const category_model = require('./model');

// -----------------------------------------------------------
const getcategorylist = async (req, res) => {
  try {

    var result = await category_model.getcategorylist();
    if (result == 'error') {
       resp.errorResponse(res);
    } else {
      resp.successResponse(res, result, 'Data fetched successfully.');
    }
  } catch (err) {
    resp.errorResponse(res);
  }
}

// ----------------------------------------------------
const getallcategoryItems = async (req, res) => {
  try {
    var result = await category_model.getallcategoryItems(req);
    if (result == 'error') {
      resp.errorResponse(res);
    } else {
      resp.successResponse(res, result, 'Data fetched successfully.');
    }
  } catch (err) {
    resp.errorResponse(res);
  }
}

//------------------------------------------------------------
const getallItems = async (req, res) => {
  try {
    var result = await category_model.getallItems(req);
    if (result == 'error') {
      resp.errorResponse(res);
    } else {
      resp.successResponse(res, result, 'Data fetched successfully.');
    }
  } catch (err) {
    resp.errorResponse(res);
  }
}

module.exports = {
  getcategorylist: getcategorylist,
  getallcategoryItems: getallcategoryItems,
  getallItems:getallItems
}