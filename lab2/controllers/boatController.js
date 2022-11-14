var Boat = require("../model/Boat");

async function getAllUsers(req, res) {
  const uri =
    "mongodb+srv://admin:admin@cluster0.unf4hz6.mongodb.net/otvrac?retryWrites=true&w=majority?authSource=admin?directConnection=true";

  mongoose.connection(uri);
  await Boats.find({}, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      return data;
    }
  });
}

module.exports = getAllUsers;
