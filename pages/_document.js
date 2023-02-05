import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
      <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/unicons.css"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500;700&family=Poppins:wght@100;200;300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        ></link>
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}