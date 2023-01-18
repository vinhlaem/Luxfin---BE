module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      firstName: {
        type: String, 
        required: true
      },
      lastName: {
        type: String, 
        required: true
      },
      age: {
        type: Number, 
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

  const user = mongoose.model("user", schema);
  return user;
};
