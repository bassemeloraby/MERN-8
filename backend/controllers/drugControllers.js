const Drug = require('../models/drugModel')



const getDrugs = async(req, res) => {
    const drugs = await Drug.find();
  res.status(200).json(drugs);
}


module.exports = {
    getDrugs
  };