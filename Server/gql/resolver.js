const userController = require("../controllers/user");

const resolver = {
  Query: {
    //User
    getUser: () => userController.getUser,
  },

  Mutation: {
    //User
    register: async (_, { values }) => userController.register(values),
  },
};

module.exports = resolver;
