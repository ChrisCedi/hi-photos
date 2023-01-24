const userController = require("../controllers/user");

const resolver = {
  Query: {
    //User
    getUser: () => userController.getUser,
  },

  Mutation: {
    //User
    register: (_, { values }) => userController.register(values),
    login: (_, { values }) => userController.login(values),
  },
};

module.exports = resolver;
