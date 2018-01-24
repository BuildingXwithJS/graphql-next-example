import React from 'react';
import Head from 'next/head';

export default ({children}) => (
  <div className="container">
    <Head>
      <title>GraphQL example</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" />
    </Head>
    {children}
  </div>
);
