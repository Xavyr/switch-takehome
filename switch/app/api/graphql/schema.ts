import { gql } from "apollo-server-micro";

const schema = gql`
  type Benefit {
    title: String!
    description: String!
  }

  type Query {
    getAllBenefits: [Benefit!]!
  }
`;

export default schema;
