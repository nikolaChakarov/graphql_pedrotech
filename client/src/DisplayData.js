import React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_ALL_USERS = gql`
    query GetAllUsers {
        users {
            id
            name
            username
            age
            nationality
        }
    }
`;

const DisplayData = () => {
    const { data, loading, error } = useQuery(QUERY_ALL_USERS);

    if (loading) {
        return <h5>Loading...</h5>;
    }

    if (error) console.log(error);

    return (
        <div>
            <h2>List of Users</h2>

            {data.users.map((el, idx) => (
                <div key={idx}>
                    <h3>Name: {el.name}</h3>
                    <h4>Username: {el.username}</h4>
                    <h4>Age: {el.age}</h4>
                    <h4>Nationality: {el.nationality}</h4>
                </div>
            ))}
        </div>
    );
};

export default DisplayData;
