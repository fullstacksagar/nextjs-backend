import { Html, Head, Main, NextScript } from "next/document";

import React from "react";

const Document = () => {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="css/feather/feather.css" />
        <link
          rel="stylesheet"
          href="css/ti-icons/css/themify-icons.css"
        />
        <link
          rel="stylesheet"
          href="css/vendor.bundle.base.css"
        />
        <link
          rel="stylesheet"
          href="css/style.css"
        ></link>
        <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="js/vendor.bundle.base.js"></script>
        <script src="js/typeahead.bundle.min.js"></script>
        <script src="js/off-canvas.js"></script>
        <script src="js/hoverable-collapse.js"></script>
        <script src="js/template.js"></script>
        <script src="js/settings.js"></script>
        <script src="js/todolist.js"></script>
      </body>
    </Html>
  );
};

export default Document;
