const db = require("../models");
const User = db.users;

const add = async (req, res) => {
  const jane = await User.create({
    firstName: "Muhammad Aman",
    lastName: "Mirza",
  });
  // Jane exists in the database now!
  console.log(jane instanceof User); // true
  console.log(jane.firstName, jane.lastName); // "Jane"
  //   jane.set({
  //     firstName: "Rehan",
  //     lastName: "Sattar",
  //   });
  //   jane.update({
  //     firstName: "Talal",
  //     lastName: "Khan",
  //   });
  await jane.save();
  console.log("jane was saved to the database!");
  //   await jane.destroy();
  await jane.reload();
  console.log("delete");
  console.log(jane.toJSON());
  res.status(200).json(jane.toJSON());
};

module.exports = { add };
