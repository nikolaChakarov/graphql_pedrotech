module.exports.UsersList = [
    {
        id: 1,
        name: "one",
        username: "user_one",
        age: 20,
        nationality: "FRANCE",
        friends: [
            {
                id: 2,
                name: "two",
                username: "user_two",
                age: 30,
                nationality: "BRAZIL",
            },
            {
                id: 3,
                name: "thre",
                username: "user_three",
                age: 40,
                nationality: "USA",
            },
        ],
    },
    {
        id: 2,
        name: "two",
        username: "user_two",
        age: 30,
        nationality: "BRAZIL",
        friends: [
            {
                id: 3,
                name: "thre",
                username: "user_three",
                age: 40,
                nationality: "USA",
            },
        ],
    },
    {
        id: 3,
        name: "thre",
        username: "user_three",
        age: 40,
        nationality: "USA",
    },
];

module.exports.MoviesList = [
    { id: 1, name: "first movie", yearOfPublication: 2000, isInTheaters: true },
    {
        id: 2,
        name: "second movie",
        yearOfPublication: 2005,
        isInTheaters: false,
    },
    { id: 2, name: "third movie", yearOfPublication: 1995, isInTheaters: true },
];
