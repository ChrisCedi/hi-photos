const resolver = {
  Query: {
    //User
    getUser: () => {
      console.log("getting user");
      return null;
    },
  },

  Mutation: {
    //User
    register: (_, { values }) => {
      console.log("register users", values);

      return null;
    },
  },
};

module.exports = resolver;
