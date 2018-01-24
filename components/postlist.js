import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const Post = ({post}) => (
  <div className="card">
    <style jsx>{`
      .card {
        margin-top: 20px;
      }
    `}</style>
    <header className="card-header">
      <p className="card-header-title">{post.title}</p>
    </header>
    <div className="card-content">
      <div className="content">{post.text}</div>
    </div>
    <footer className="card-footer">
      <div className="card-footer-item">
        Written by: {post.author.firstName} {post.author.lastName}
      </div>
    </footer>
  </div>
);

const PostList = ({data}) => {
  const {error, allPosts} = data;
  if (error) {
    return <div>Error loading posts.</div>;
  }
  if (allPosts && allPosts.length) {
    return (
      <section>
        <ul>{allPosts.map(post => <Post key={post.id} post={post} />)}</ul>
      </section>
    );
  }
  return <div>Loading</div>;
};

export const allPosts = gql`
  query {
    allPosts {
      id
      title
      text
      author {
        id
        firstName
        lastName
      }
    }
  }
`;
// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(allPosts)(PostList);
