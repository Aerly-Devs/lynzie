import React from 'react';
import Document, { Html, Head, Main } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
