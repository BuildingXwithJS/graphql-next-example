const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
type Query {
  author(firstName: String, lastName: String): Author
  post(title: String): Post
  allAuthors: [Author]
  allPosts: [Post]
}

type Author {
  id: Int
  firstName: String
  lastName: String
  posts: [Post]
}

input AuthorInput {
  firstName: String
  lastName: String
}

type Post {
  id: Int
  title: String
  text: String
  author: Author
}

input PostInput {
  title: String
  text: String
  author: Int
}

type Mutation {
  createAuthor(input: AuthorInput!): Author
  createPost(input: PostInput!): Post
}
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

module.exports = schema;
