module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        source: {
            type: String, 
            required:  true
          },
        account: {
            type: String, 
            required: true
        },
        balanceVND:{
            type: Number
        },
        balanceUSD:{
            type: Number
        },
        total:{
            type: Number
        }
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const monthstart = mongoose.model("monthstart", schema);
    return monthstart;
  };
  