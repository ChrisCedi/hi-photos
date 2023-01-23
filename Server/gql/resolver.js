const resolver = {
  Query: {
    //user
    getUser: () => {
      console.log("getting user");
      return null;
    },
  },
};

module.exports = resolver;
