import { gql } from "graphql-request";

export const getAllBlogs = gql`
  query Blogs {
    blogs {
      id
      name
      time
      img {
        id
        fileName
        url
      }
      tekst {
        text
      }
    }
  }
`;
