import "@/styles/globals.css";
import "@/styles/navbar.css";
import "@/styles/home.css";
import "@/styles/footer.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {" "}
        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&family=Quicksand&display=swap&apos;);
          {/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400&family=Quicksand&family=Roboto:wght@100&display=swap'); */}
          {/* @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@200;300&family=Poppins:wght@100;200;400&family=Quicksand&family=Roboto:wght@100&display=swap'); */}
        </style>
        <style>
          @import
          url(&quothttps://fonts.googleapis.com/css2?family=Heebo:wght@200;300;400;500&family=Poppins:wght@100;200;400&family=Quicksand&family=Roboto:wght@100&display=swap&quot);
          @import
          url(&quothttps://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Heebo:wght@200;300;400;500&family=Poppins:wght@100;200;400&family=Quicksand&family=Roboto:wght@100&display=swap&quot);
          @import
          url(&quothttps://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Heebo:wght@200;300;400;500&family=Poppins:wght@100;200;400&family=Quicksand&family=Roboto:wght@100&family=Staatliches&display=swap&quot);
        </style>
        <style>
          @import
          url(&quothttps://fonts.googleapis.com/css2?family=Lora:wght@500&family=Merriweather:wght@300&display=swap&quot);
        </style>
        <style>
          @import
          url(&quothttps://fonts.googleapis.com/css2?family=Lora:wght@500&family=Merriweather:wght@300&family=Rubik:wght@300&display=swap&quot);
        </style>
        <style>
          @import
          url(&quothttps://fonts.googleapis.com/css2?family=Dancing+Script&family=Lora:wght@500&family=Merriweather:wght@300&family=Rubik:wght@300&display=swap&quot);
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
