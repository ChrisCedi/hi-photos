const userController = require("../controllers/user");

const resolver = {
  Query: {
    //User
    getUser: (_, { id, username }) => userController.getUser(id, username),
  },

  Mutation: {
    //User
    register: (_, { values }) => userController.register(values),
    login: (_, { values }) => userController.login(values),
    updateAvatar: (_, { file }) => userController.updateAvatar(file),
  },
};

module.exports = resolver;
