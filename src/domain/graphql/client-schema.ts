import gql from "graphql-tag";

export const typeDefs = gql`
    # for IDE/editor tools
    directive @client on FIELD

    type Menu {
        active: String
    }

    extend type Query {
        menu: Menu!
    }
`;
