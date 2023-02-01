const transaction = require('../models/TransactionModel')
const Transaction = transaction.transaction;

// Create and Save a new Transaction
exports.create = async (req, res) => {

  try {
    const {accountId, amountVND, amountUSD, reason, type} = req.body
    const transaction = await Transaction.create({accountId, amountVND, amountUSD, reason, type})
    return res.status(201).json({
      success: true,
      data: transaction
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

exports.findAll = async (req, res) => {
    
      try {
        const transactions = await Transaction.find();
    
        return res.status(200).json({
          success: true,
          count: transactions.length,
          data: transactions
        });
      } catch (err) {
        return res.status(500).json({
          success: false,
          error: 'Server Error'
        });
      }
    };