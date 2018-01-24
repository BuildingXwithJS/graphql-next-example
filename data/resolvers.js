const {Author, Post} = require('./mongodb');

const resolvers = {
  Query: {
    author(_, args) {
      return Author.findOne(args);
    },
    allAuthors() {
      return Author.find();
    },
    post(_, args) {
      return Post.find(args);
    },
    allPosts() {
      return Post.find();
    },
  },
  Author: {
    posts(author) {
      return Post.find({author});
    },
  },
  Post: {
    author(post) {
      return Author.findById(post.author);
    },
  },
  Mutation: {
    async createAuthor(_, {input}) {
      const count = await Author.count();
      const author = new Author({
        id: count + 1,
        ...input,
      });
      await author.save();
      return author.toObject();
    },
    async createPost(_, {input}) {
      const author = await Author.findOne({id: input.author});
      const count = await Post.count();
      const post = new Post({
        ...input,
        author: author._id,
        id: count + 1,
      });
      await post.save();
      return post.toObject();
    },
  },
};

module.exports = resolvers;
