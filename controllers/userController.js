const db = require("../models");
const User = db.users;

const getUsers = async (req, res) => {
  const fetchAll = await User.findAll();
  res.status(200).json({ data: fetchAll });
};

const getUserId = async (req, res) => {
  const fetchId = await User.findOne({ where: { id: req.params.id } });
  res.status(200).json({ data: fetchId });
};

const createUser = async (req, res) => {
  const postData = req.body;
  let resultData, bulkData, createData;

  if (postData.length > 1) {
    bulkData = await User.bulkCreate(postData);
    resultData = bulkData;
  } else {
    createData = await User.create(postData);
    resultData = createData;
  }

  // Use a ternary expression to choose between data and bulkData
  const dataToReturn = postData.length > 1 ? bulkData : createData;

  // Send the response
  res.status(200).json({ data: dataToReturn });
};

const updateUser = async (req, res) => {
  const postData = req.body;
  const updateUser = await User.update(postData, {
    where: { id: req.params.id },
  });
  res.status(200).json({ data: updateUser });
};

const deleteUser = async (req, res) => {
  const data = await User.destroy({
    where: { id: req.params.id },
  });
  res.status(200).json({ data: data });
};

module.exports = {
  getUsers,
  getUserId,
  createUser,
  updateUser,
  deleteUser,
};
