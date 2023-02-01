const { Types } = require("mongoose");

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        accountId:{
            type: Types.ObjectId
        },
        amountVND:{
            type: Number
        },
        amountUSD:{
            type: Number
        },
        reason: {
          type: String, 
          required: true
        },
        type: {
          type: String,
          required: true
        }
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const transaction = mongoose.model("transaction", schema);
    return transaction;
  };
  