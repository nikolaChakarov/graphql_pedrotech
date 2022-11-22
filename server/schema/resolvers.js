let { UsersList, MoviesList } = require("../fakeDate");

const resolvers = {
    // User resolvers
    Query: {
        getAllUsers() {
            return UsersList;
        },

        getUser(_parent, args) {
            return UsersList.find((el) => el.id == args.id);
        },
        // Movie resolvers
        movies() {
            return MoviesList;
        },

        movie(_parent, { name }) {
            return MoviesList.find((el) => el.name === name);
        },
    },

    Mutation: {
        createUser(_parent, { input }) {
            const lastId = UsersList[UsersList.length - 1].id;
            const newUser = Object.assign(input, { id: lastId + 1 });

            UsersList.push(newUser);
            return newUser;
        },

        updateUser(_parent, { xinput }) {
            const { id, ...res } = xinput;
            let updatedUser = UsersList.find((el) => el.id === Number(id));

            if (!updatedUser) return null;

            updatedUser = Object.assign(updatedUser, {
                ...res,
                username: xinput.newUsername,
            });

            return updatedUser;
        },

        deleteUser(_parent, { id }) {
            const userToDelete = UsersList.find((el) => el.id == id);
            UsersList = UsersList.filter((el) => el.id != id);
            return userToDelete;
        },
    },

    User: {
        favouriteMovies() {
            return MoviesList.filter((el) => el.yearOfPublication < 2000);
        },
    },
};

module.exports = { resolvers };
