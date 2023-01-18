module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        idAccount:{
          type: String
        },
        amountVND:{
            type: Number
        },
        amountUSD:{
            type: Number
        },
        total:{
            type: Number
        },
        reason: {
          type: String, 
          required: true
      },
        date:{
          type: String
        }
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const moneyin = mongoose.model("moneyin", schema);
    return moneyin;
  };
  