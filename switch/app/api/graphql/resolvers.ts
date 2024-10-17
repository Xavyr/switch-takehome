import { payload } from "@/app/_dbs/database";

const resolvers = {
  Query: {
    getAllBenefits: () => {
      const { benefits } = payload;
      return benefits;
    },
  },
};
export default resolvers;
