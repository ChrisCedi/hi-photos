const User = require("../models/user");
const bcriptjs = require("bcryptjs");

const getUser = () => {
  console.log("get user");
  return null;
};

const register = async (values) => {
  const newUser = values;
  newUser.username = newUser.username.toLowerCase();
  newUser.email = newUser.email.toLowerCase();

  console.log(newUser);

  const { email, password, username } = newUser;

  const foundEmail = await User.findOne({ email });
  if (foundEmail) throw new Error("El correo ya esta registrado");

  const foundUsername = await User.findOne({ username });
  if (foundUsername) throw new Error("El nombre de usuario ya esta en uso");

  const salt = await bcriptjs.genSaltSync(10);
  newUser.password = await bcriptjs.hash(password, salt);

  try {
    const user = new User(newUser);
    user.save();
    return user;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUser, register };
