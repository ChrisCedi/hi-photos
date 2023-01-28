const User = require("../models/user");
const bcriptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (values) => {
  const newUser = values;
  newUser.username = newUser.username.toLowerCase();
  newUser.email = newUser.email.toLowerCase();

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

const createToken = (user, SECRET_KEY, expiresIn) => {
  const { id, name, email, username } = user;
  const payload = {
    id,
    name,
    email,
    username,
  };

  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

const login = async (values) => {
  const { email, password } = values;
  const userFound = await User.findOne({ email: email.toLowerCase() });
  if (!userFound) throw new Error("Error en el email o contraseña");

  const passwordSuccess = await bcriptjs.compare(password, userFound.password);

  if (!passwordSuccess) throw new Error("Error en el email o contraseña");

  return {
    token: createToken(userFound, process.env.SECRET_KEY, "10h"),
  };
};

const getUser = async (id, username) => {
  let user = null;

  console.log(id);

  if (id) user = await User.findById(id);
  if (username) user = await User.findOne({ username });
  if (!user) throw new Error("El usuario no existe");

  return user;
};

module.exports = { getUser, register, login };
