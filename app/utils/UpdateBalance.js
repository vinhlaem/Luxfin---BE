const TYPE_TRANSACTION = require("../constant/enum");

module.exports = function CalculationBalance(type, balance, amount) {
  if (type === TYPE_TRANSACTION.IN) {
    return balance + amount;
  }
  return balance - amount;
};
