import gql from "graphql-tag";

export const MyQuery = gql`
   query MyQuery {
       backendFooField
       menu @client {
           active
       }
   }
`
