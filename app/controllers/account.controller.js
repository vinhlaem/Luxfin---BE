const account = require('../models/AccountModel')
const Account = account.account;

// Create and Save a new Tutorial
exports.create = async(req, res) => {

  try {
    const {source,account,balanceVND,balanceUSD} = req.body
    const AccountBank = await Account.create({source, account, balanceVND, balanceUSD})
    return res.status(201).json({
      success: true,
      data: AccountBank
    }); 
  } catch (error) {
    if(error.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};

exports.findAll = async(req, res) => {
  try {
    const AccountBank = await Account.find();

    return res.status(200).json({
      success: true,
      count: AccountBank.length,
      data: AccountBank
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
    };

exports.findOne = async(req, res) => {
        
        const id = req.params.id;
      
        try {
          const AccountBank = await Account.findById(id);
      
          return res.status(200).json({
            success: true,
            data: AccountBank
          });
        } catch (err) {
          return res.status(500).json({
            success: false,
            error: 'Server Error'
          });
        }
      };    