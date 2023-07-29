const { User } = require("../model/user");

async function createUser(req, res) {
  const { firstName, breed } = req.body;
  const user = await User.create(
    { firstName, breed },
    { fields: ["firstName", "breed"] }
  );
  console.log(user);

  res.json(user);
}

async function getUser(req, res) {
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });
  res.json(user);
}

module.exports = {
  createUser,
  getUser,
};
