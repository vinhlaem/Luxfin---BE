const transaction = require("../models/TransactionModel");
const Transaction = transaction.transaction;

const account = require("../models/AccountModel");
const accountBank = account.account;
const CalculationBalance = require("../utils/UpdateBalance");

// Create and Save a new Transaction
exports.create = async (req, res) => {
  try {
    const { accountId, amountVND, amountUSD, reason, type } = req.body;
    const currentAccount = await accountBank.findById(accountId);

    await accountBank.findByIdAndUpdate(accountId, {
      balanceVND: CalculationBalance(
        type,
        currentAccount.balanceVND,
        amountVND
      ),
      balanceUSD: CalculationBalance(
        type,
        currentAccount.balanceUSD,
        amountUSD
      ),
    });
    const transaction = await Transaction.create({
      accountId,
      amountVND,
      amountUSD,
      reason,
      type,
    });
    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    return error;
  }
};

exports.findAll = async (req, res) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
