import React from 'react';

import App from '../components/app';
import PostList from '../components/postlist';
import Submit from '../components/submit';
import withData from '../lib/withData';

export default withData(() => (
  <App>
    <Submit />
    <PostList />
  </App>
));
